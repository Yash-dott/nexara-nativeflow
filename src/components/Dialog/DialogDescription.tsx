import React from 'react';
import { View, StyleSheet } from 'react-native';
import { moderateVerticalScale } from '../../helpers/ResponsiveCalculations';
import { StyledText } from '../StyledComponents';
import type { DialogDescriptionProps } from '../../types';

const DialogDescription: React.FC<DialogDescriptionProps> = ({
    fs,
    textVariant = 'h5',
    containerStyle,
    textStyle,
    children,
}) => {
    const STYLES = StyleSheet.create({
        TEXT: {
            color: '#a1a1aa',
            lineHeight: moderateVerticalScale(13)
        }
    });
    return (<>

        <View style={containerStyle}>
            <StyledText style={[STYLES.TEXT, textStyle]} variant={textVariant} fs={fs}>{children}</StyledText>
        </View>
    </>);
}
export default DialogDescription;
export type { DialogDescriptionProps };