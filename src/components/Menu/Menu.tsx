import React, { useState, useRef, useCallback, useEffect, } from "react";
import { StyleSheet, Pressable, View, ScrollView, Animated } from "react-native";
import { StyledView } from "../StyledComponents";
import Portal from "../Portal/Portal";
import { positionCalculations } from "./calculations";
import type { menuLayoutTypes, anchorLayoutTypes } from "./calculations";
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import type { MenuProps } from "../../types";

const Menu: React.FC<MenuProps> = ({
    placement = 'top',
    anchor,
    disableBuiltInState = false,
    isOpen = false,
    onRequestOpen,
    onRequestClose,
    onSelect,
    style,
    children
}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const anchorLayoutRef = useRef<anchorLayoutTypes>({ pageY: 0, pageX: 0, height: 0, width: 0 });
    const menuLayoutRef = useRef<menuLayoutTypes>({ height: 0, width: 0 });
    const buttonRef = useRef<View>(null!);
    const animatedScaleRef = useRef(new Animated.Value(1)).current;

    const positions = (useCallback(() => (positionCalculations(anchorLayoutRef.current, menuLayoutRef.current, placement)), [menuLayoutRef, anchorLayoutRef, placement]))();

    useEffect(() => {
        Animated.timing(animatedScaleRef, {
            toValue: (disableBuiltInState && isOpen) || isVisible ? 1 : 0,
            duration: 150,
            useNativeDriver: true,
        }).start();
    }, [isOpen, isVisible]);

    const measureLayout = useCallback(() => {
        return new Promise((resolve) => {
            buttonRef.current?.measure((_x, _y, width, height, pageX, pageY) => {
                anchorLayoutRef.current = { pageY, pageX, height, width };
                resolve(true);
            });
        });
    }, []);

    const onOpen = async () => {
        await measureLayout();
        if (disableBuiltInState) {
            onRequestOpen?.();
        } else {
            setIsVisible(true);
        }
    }

    const onClose = () => {
        if (disableBuiltInState) {
            onRequestClose?.();
        } else {
            setIsVisible(false);
        }
    }

    const renderChildren = (useCallback(() => {
        return (<ScrollView>
            {React.Children?.toArray(children).map((child) => {
                if (React.isValidElement<{ onPress: () => void; name: string; }>(child)) {
                    return React.cloneElement(child, {
                        onPress: () => {
                            (child)?.props?.onPress?.();
                            onSelect?.((child)?.props?.name);
                            onClose();
                        }
                    });
                }
                return null;
            })}
        </ScrollView>)

    }, [children]))();

    const scale: number = disableBuiltInState ? Number(isOpen) : Number(isVisible);
    const pointerEvent = (isVisible && !disableBuiltInState) || (isOpen && disableBuiltInState) ? 'auto' : 'none';

    const dynamicStyles = {
        left: positions.left,
        top: positions.top,
    };

    const menuAnimatedStyle = {
        transform: [{ scale: animatedScaleRef }],
        opacity: animatedScaleRef
    };

    return (<>

        <Portal
            name='Menu'
        >
            <Pressable
                style={[StyleSheet.absoluteFill, { transform: [{ scale }] }]}
                pointerEvents={pointerEvent}
                onPress={onClose}>
                <Animated.View
                    onStartShouldSetResponder={() => true}
                    style={[STYLES.MENU_CONT, dynamicStyles, menuAnimatedStyle, style]}
                    onLayout={({ nativeEvent: { layout: { height, width } } }) => menuLayoutRef.current = { width, height }}
                >
                    {renderChildren}
                </Animated.View>
            </Pressable>
        </Portal>

        <StyledView alignItems='flex-start' ref={buttonRef} onLayout={measureLayout}>
            {anchor && React.isValidElement<{ onPress: () => void }>(anchor) && React.cloneElement(anchor, { onPress: onOpen })}
        </StyledView>

    </>)
}
export default Menu;
export type { MenuProps };

const STYLES = StyleSheet.create({
    MENU_CONT: {
        shadowColor: "#000",
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        position: 'absolute',
        borderRadius: 5,
        maxHeight: 400,
        minWidth: horizontalScale(150),
        paddingVertical: verticalScale(5)
    }
});