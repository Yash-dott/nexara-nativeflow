import React, { cloneElement, useEffect } from 'react';
import type { ReactElement, ReactNode, } from "react";
import { Keyboard, BackHandler } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming, withSpring } from 'react-native-reanimated';
import { dialogSizes } from '../../constants';
import Portal from '../Portal/Portal';
// import { useTheme } from '../../hooks';



type DialogProps = {
    variant?: 'classic' | 'default';
    isVisible?: boolean;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';
    fullScreen?: boolean;
    backdropColor?: string;
    animationDuration?: number;
    onClose?: () => void;
    children?: ReactNode;
}

const Dialog: React.FC<DialogProps> = ({
    variant = 'default',
    isVisible = false,
    size = 'lg',
    fullScreen,
    backdropColor = 'rgba(0, 0, 0, 0.5)',
    animationDuration = 800,
    onClose,
    children,
}) => {

    const scale = useSharedValue(0.8);
    const opacity = useSharedValue(0);

    useEffect(() => {
        opacity.value = withTiming(isVisible ? 1 : 0);
        scale.value = withSpring(isVisible ? 1 : 0.8,
            {
                duration: animationDuration,
                dampingRatio: 0.6,
                stiffness: 36,
                overshootClamping: false,
                restDisplacementThreshold: 0.01,
                restSpeedThreshold: 0.01,
            }
        );
    }, [isVisible]);

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', hardwareBackPress)
        return () => BackHandler.removeEventListener('hardwareBackPress', hardwareBackPress);
    }, [isVisible]);

    const hardwareBackPress = () => {
        onClose?.()
        return isVisible;
    };

    const backdropAnimatedStyle = useAnimatedStyle(() => {
        return {
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: backdropColor,
            justifyContent: 'center',
            alignItems: 'center',
            opacity: opacity.value
        }
    });
    const modalContAnimatedStyle = useAnimatedStyle(() => {
        return {
            backgroundColor: '#fff',
            borderRadius: 5,
            width: `${dialogSizes[size]}%`,
            borderWidth: 1,
            borderColor: '#d4d4d4',
            minHeight: fullScreen ? '100%' : 'auto',
            maxHeight: fullScreen ? '100%' : '80%',
            opacity: opacity.value,
            transform: [{
                scale: scale.value
            }],
        }
    });
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
        return true;
    };

    return (<>
        <Portal name={`dialog-${Math.random() * 50}`}>
            <Animated.View
                style={backdropAnimatedStyle}
                pointerEvents={isVisible ? 'auto' : 'none'}
                onStartShouldSetResponder={handleStartShouldSetResponder}
            >
                <Animated.View
                    style={modalContAnimatedStyle}
                    onStartShouldSetResponder={() => true}
                >
                    {renderChildrenWithVariant()}
                </Animated.View>
            </Animated.View>
        </Portal>
    </>);
}
export default Dialog;
export type { DialogProps };