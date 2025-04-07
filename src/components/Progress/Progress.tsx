import React, { useEffect, useMemo, useRef } from 'react';
import { Animated, StyleSheet } from "react-native";
import { moderateScale, verticalScale, } from "../../helpers/ResponsiveCalculations";
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import type { ProgressProps } from '../../types';

const Progress: React.FC<ProgressProps> = ({
    value = 50,
    thickness = 5,
    br = 100,
    trackColor = '#E8E8E8',
    progressColor,
}) => {

    const animatedWidth = useRef(new Animated.Value(value)).current;
    const theme = useTheme();

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: value / 100,
            duration: 1000,
            useNativeDriver: true,
        }).start();
    }, [value]);

    const dynamicStyles = useMemo(() => ({
        TRACK: {
            backgroundColor: trackColor,
            borderRadius: moderateScale(br),
            height: verticalScale(thickness),
        },
        TRACK_ITEM: {
            backgroundColor: progressColor ?? theme?.colors.primary,
            borderRadius: moderateScale(br),
        }
    }), [br, trackColor, thickness, progressColor, theme]);

    const animatedViewStyle = {
        transform: [{ scaleX: animatedWidth }],
        transformOrigin: 'left'
    }

    return (<>
        <StyledView
            style={[STYLES.TRACK, dynamicStyles.TRACK]}
        >
            <Animated.View
                style={[STYLES.TRACK_ITEM, dynamicStyles.TRACK_ITEM, animatedViewStyle]}
            />
        </StyledView>
    </>);
};
export default Progress;
export type { ProgressProps };

const STYLES = StyleSheet.create({
    TRACK: {
        overflow: 'hidden',
        width: '100%',
    },
    TRACK_ITEM: {
        width: "100%",
        height: '100%'
    }
});