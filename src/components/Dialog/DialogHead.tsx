import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import { moderateScale, responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { X } from '../../assets/svg';


type DialogHeadProps = {
    variant?: 'classic' | 'default';
    title?: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
    children?: React.ReactNode;
}

const DialogHead: React.FC<DialogHeadProps> = ({
    variant = 'default',
    title = 'Title',
    containerStyle,
    textStyle,
    children
}) => {

    const STYLES = StyleSheet.create({
        CONTAINER: {
            borderBottomWidth: variant == 'default' ? 0.7 : 0,
            borderColor: '#d4d4d4',
            padding: moderateScale(variant === 'default' ? 16 : 25),
            paddingBottom: moderateScale(16),
            justifyContent: 'space-between',
            flexDirection: 'row',
        },
        HEADER_TEXT: {
            fontSize: responsiveFontSize(15),
            fontWeight: 'bold',
            color: '#000',
        }
    });
    return (<>

        <View style={[STYLES.CONTAINER, containerStyle]}>
            <View>
                <Text style={[STYLES.HEADER_TEXT, textStyle]}>{title}</Text>
                {children}
            </View>
            <TouchableOpacity>
                <X color='gray' size={moderateScale(20)} />
            </TouchableOpacity>
        </View>
    </>);
}
export default DialogHead;
export type { DialogHeadProps };