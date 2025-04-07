import React, { cloneElement, forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';
import type { ReactElement } from "react";
import { Keyboard, BackHandler, StyleSheet, Animated } from 'react-native';
import type { ViewStyle } from 'react-native';
import { dialogSizes } from '../../constants';
import Portal from '../Portal/Portal';
import type { DialogProps, DialogRefProps } from '../../types';


const Dialog = forwardRef<DialogRefProps, DialogProps>(({
    variant = 'default',
    size = 'lg',
    fullScreen,
    backdropColor = 'rgba(0, 0, 0, 0.5)',
    // animationDuration = 800,
    onClose,
    containerStyle,
    children,
}, ref) => {

    const [dialogVisible, setDialogVisible] = useState(false);
    const scale = useRef(new Animated.Value(0.9)).current;
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: dialogVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
        }).start();
        Animated.spring(scale, {
            toValue: dialogVisible ? 1 : 0.9,
            damping: 10,
            stiffness: 90,
            useNativeDriver: true,
        }).start();
    }, [dialogVisible]);

    useEffect(() => {
        const handler = BackHandler.addEventListener('hardwareBackPress', hardwareBackPress);
        return () => handler.remove();
    }, [dialogVisible]);

    const hardwareBackPress = () => {
        onClose?.();
        setDialogVisible(false);
        return dialogVisible;
    };
    useImperativeHandle(ref, () => ({
        open: () => setDialogVisible(true),
        close: () => setDialogVisible(false)
    }));

    const backdropAnimatedStyles = {
        opacity: opacity,
        backgroundColor: backdropColor,
    };
    const modalContAnimatedStyles = {
        transform: [{ scale }],
        opacity: opacity,
    };
    const dynamicModalContStyles: ViewStyle = {
        minHeight: fullScreen ? '100%' : 'auto',
        maxHeight: fullScreen ? '100%' : '80%',
        width: `${dialogSizes[size]}%`,
    };

    const renderChildrenWithVariant = () => {
        return React.Children.map(children, (child) => {
            if (React.isValidElement(child)) {
                return cloneElement(child as ReactElement<any>, { variant });
            }
            return child;
        });
    };

    const handleStartShouldSetResponder = (): boolean => {
        Keyboard.dismiss();
        onClose?.();
        setDialogVisible(false);
        return true;
    };

    return (<>
        <Portal name='dialog'>
            <Animated.View
                style={[STYLES.BACKDROP_CONT, backdropAnimatedStyles]}
                pointerEvents={dialogVisible ? 'auto' : 'none'}
                onStartShouldSetResponder={handleStartShouldSetResponder}
            >
                <Animated.View
                    style={[STYLES.MODAL_CONT, dynamicModalContStyles, modalContAnimatedStyles, containerStyle]}
                    onStartShouldSetResponder={() => true}
                >
                    {renderChildrenWithVariant()}
                </Animated.View>
            </Animated.View>
        </Portal>
    </>);
});
export default Dialog;
export type { DialogProps };

const STYLES = StyleSheet.create({
    BACKDROP_CONT: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    MODAL_CONT: {
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#d4d4d4'
    }
});