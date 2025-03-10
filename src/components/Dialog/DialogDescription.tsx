import React from 'react';
import type { ReactNode } from "react";
import { View, StyleSheet, Text } from 'react-native';
import type { TextStyle, StyleProp, ViewStyle } from "react-native";
import { responsiveFontSize, verticalScale } from '../../helpers/ResponsiveCalculations';


type DialogDescriptionProps = {
    fs?: number;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: ReactNode
}

const DialogDescription: React.FC<DialogDescriptionProps> = ({
    fs = 12,
    containerStyle,
    textStyle,
    children,
}) => {

    const STYLES = StyleSheet.create({
        TEXT: {
            color: '#a1a1aa',
            // textAlign: 'justify',
            fontSize: responsiveFontSize(fs),
            lineHeight: verticalScale(15)
        }
    });
    return (<>

        <View style={containerStyle}>
            <Text style={[STYLES.TEXT, textStyle]}>{children}</Text>
        </View>
    </>);
}
export default DialogDescription;
export type { DialogDescriptionProps };