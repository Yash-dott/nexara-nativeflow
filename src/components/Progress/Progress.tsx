import React from 'react';
import { StyleSheet } from "react-native";
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
    trackColor = '#645E64',
    progressColor = '#fff',
}) => {

    const STYLES = StyleSheet.create({
        TRACK: {
            backgroundColor: trackColor,
            borderRadius: moderateScale(100),
            overflow: 'hidden'
        },
        TRACK_ITEM: {
            backgroundColor: progressColor,
            height: verticalScale(size),
            width: `${value}%`,
            borderRadius: moderateScale(100)
        }

    });
    return (<>

        <StyledView f={1} style={STYLES.TRACK}>
            <StyledView style={STYLES.TRACK_ITEM} />
        </StyledView>
    </>);
};
export default Progress;
export type { ProgressProps };
