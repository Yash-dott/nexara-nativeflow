import React from 'react';
import { View } from 'react-native';
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
    return (<>
        <View style={containerStyle}>
            <StyledText
                style={[{ lineHeight: moderateVerticalScale(13) }, textStyle]}
                color='#a1a1aa'
                variant={textVariant}
                fs={fs}
            >
                {children}
            </StyledText>
        </View>
    </>);
}
export default DialogDescription;
export type { DialogDescriptionProps };