import React, { useState, useRef, useCallback, useEffect, } from "react";
import type { ReactNode } from "react";
import { StyleSheet, Pressable, View, ScrollView } from "react-native";
import type { StyleProp, ViewStyle } from "react-native";
import { StyledView } from "../StyledComponents";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";
import Portal from "../Portal/Portal";
import { positionCalculations } from "./calculations";
import type { menuLayoutTypes, anchorLayoutTypes } from "./calculations";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";

type MenuProps = {
    placement?: 'top' | 'bottom';
    anchor?: JSX.Element;
    disableBuiltInState?: boolean;
    isOpen?: boolean;
    onRequestOpen?: () => void;
    onRequestClose?: () => void;
    onSelect?: (name: string | undefined) => void;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

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
    const buttonRef = useRef<View | null>(null);
    const scaleSharedValue = useSharedValue(0.5);
    const positions = (useCallback(() => (positionCalculations(anchorLayoutRef.current, menuLayoutRef.current, placement)), [menuLayoutRef, anchorLayoutRef, placement]))();

    useEffect(() => {
        if ((disableBuiltInState && isOpen) || isVisible) {
            scaleSharedValue.value = withTiming(1, { duration: 150 });
        } else {
            scaleSharedValue.value = 0;
        }
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
        return (<ScrollView >
            {React.Children?.toArray(children).map((e) => {
                return React.cloneElement(e as React.ReactElement, {
                    onPress: () => {
                        (e as React.ReactElement)?.props?.onPress?.();
                        onSelect?.((e as React.ReactElement)?.props?.name);
                        onClose();
                    }
                });
            })}
        </ScrollView>)

    }, [children]))();

    const scale: number = disableBuiltInState ? Number(isOpen) : Number(isVisible);
    const pointerEvent = (isVisible && !disableBuiltInState) || (isOpen && disableBuiltInState) ? 'auto' : 'none';

    const STYLES = StyleSheet.create({
        CONTAINER: {
            width: horizontalScale(120),
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
            left: positions.left,
            top: positions.top,
            borderRadius: 5,
            maxHeight: 400
        }
    });

    const menuAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ scale: scaleSharedValue.value }],
            opacity: scaleSharedValue.value
        }
    });

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
                    style={[STYLES.CONTAINER, menuAnimatedStyle, style]}
                    onLayout={({ nativeEvent: { layout: { height, width } } }) => menuLayoutRef.current = { width, height }}
                >
                    {renderChildren}
                </Animated.View>
            </Pressable>
        </Portal>

        <StyledView zIndex={999} alignItems='flex-start'>
            <View ref={buttonRef} onLayout={measureLayout}>
                {anchor && React.cloneElement(anchor, { onPress: onOpen })}
            </View>
        </StyledView>

    </>)
}
export default Menu;
export type { MenuProps };