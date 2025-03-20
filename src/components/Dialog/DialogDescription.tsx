import React from 'react';
import type { ReactNode } from "react";
import { View, StyleSheet } from 'react-native';
import type { TextStyle, StyleProp, ViewStyle } from "react-native";
import { moderateVerticalScale } from '../../helpers/ResponsiveCalculations';
import { StyledText } from '../StyledComponents';
import type { TypographyVariant } from '../../types/styledTextTypes';


type DialogDescriptionProps = {
    fs?: number;
    textVariant?: TypographyVariant;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: ReactNode
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({
    fs,
    textVariant= 'h5',
    containerStyle,
    textStyle,
    children,
}) => {

    const STYLES = StyleSheet.create({
        TEXT: {
            color: '#a1a1aa',
            // textAlign: 'justify',
            // fontSize: responsiveFontSize(fs),
            // lineHeight: verticalScale(17, 0.40)
            lineHeight: moderateVerticalScale(13)
        }
    });
    return (<>

        <View style={containerStyle}>
            <StyledText style={[STYLES.TEXT, textStyle]} variant={textVariant} fs={fs}>{children}</StyledText>
            {/* <Text style={[STYLES.TEXT, textStyle]}>{children}</Text> */}
        </View>
    </>);
}
export default DialogDescription;
export type { DialogDescriptionProps };