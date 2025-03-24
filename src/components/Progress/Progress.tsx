import React, { useEffect, useRef } from 'react';
import { Animated, StyleSheet } from "react-native";
import { moderateScale, verticalScale, } from "../../helpers/ResponsiveCalculations";
import { StyledView } from '../StyledComponents';


type ProgressProps = {
    value?: number;
    size?: number;
    trackColor?: string;
    progressColor?: string;
}

const Progress: React.FC<ProgressProps> = ({
    value = 50,
    size = 5,
    trackColor = '#E8E8E8',
    progressColor = 'green',
}) => {

    const animatedWidth = useRef(new Animated.Value(value)).current;

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
            borderRadius: moderateScale(100),
            overflow: 'hidden'
        },
        TRACK_ITEM: {
            backgroundColor: progressColor,
            height: verticalScale(size),
            borderRadius: moderateScale(100)
        }

    });

    return (<>

        <StyledView f={1} style={STYLES.TRACK}>
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
