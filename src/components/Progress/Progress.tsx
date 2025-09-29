import { useEffect, useMemo, useRef, type FC } from 'react';
import { Animated, StyleSheet } from "react-native";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import type { ProgressProps } from '../../types';

const Progress: FC<ProgressProps> = ({
    value = 50,
    thickness = 5,
    br = 100,
    trackColor,
    progressColor,
}) => {

    const animatedWidth = useRef(new Animated.Value(value)).current;
    const theme = useTheme();
    trackColor  = theme?.colors.palette.natural[200];

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
            borderRadius: verticalScale(br),
            height: verticalScale(thickness),
        },
        TRACK_ITEM: {
            backgroundColor: progressColor ?? theme?.colors.brand.primary,
            borderRadius: verticalScale(br),
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