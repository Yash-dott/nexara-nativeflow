import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from "react-native";
import { moderateScale, verticalScale, } from "../../helpers/ResponsiveCalculations";
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';


type ProgressProps = {
    /** Current progress value (0-100) */
    value?: number;

    /** Thickness of the progress bar */
    thickness?: number;

    /** Border radius of the progress bar */
    br?: number;

    /** Background color of the track (unfilled part) */
    trackColor?: string;

    /** Color of the progress (filled part) */
    color?: string;
}

const Progress: React.FC<ProgressProps> = ({
    value = 50,
    thickness = 5,
    br = 100,
    trackColor = '#E8E8E8',
    color,
}) => {

    const animatedWidth = useRef(new Animated.Value(value)).current;
    const theme = useTheme();

    useEffect(() => {
        Animated.timing(animatedWidth, {
            toValue: value,
            duration: 1000,
            useNativeDriver: false,
        }).start();
    }, [value]);

    const STYLES = StyleSheet.create({
        TRACK: {
            backgroundColor: trackColor,
            borderRadius: moderateScale(br),
            overflow: 'hidden'
        },
        TRACK_ITEM: {
            backgroundColor: color ?? theme?.colors.primary,
            height: verticalScale(thickness),
            borderRadius: moderateScale(br)
        }
    });

    return (<>
        <StyledView style={STYLES.TRACK}>
            <Animated.View style={[STYLES.TRACK_ITEM, {
                width: animatedWidth.interpolate({
                    inputRange: [0, 100],
                    outputRange: ['0%', '100%'],
                })
            }]} />
        </StyledView>
    </>);
};
export default Progress;
export type { ProgressProps };
