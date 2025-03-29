import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { moderateScale } from '../../helpers/ResponsiveCalculations';
import { X } from '../../assets/svg';
import { StyledText } from '../StyledComponents';
import type { DialogHeadProps } from '../../types';


interface props extends DialogHeadProps {
    variant?: 'classic' | 'default';
}

const DialogHead: React.FC<props> = ({
    variant = 'default',
    title = 'Title',
    textVariant = 'h4',
    fs,
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
            // fontSize: responsiveFontSize(15),
            fontWeight: 'bold',
            color: '#000',
        }
    });
    return (<>

        <View style={[STYLES.CONTAINER, containerStyle]}>
            <View>
                <StyledText style={[STYLES.HEADER_TEXT, textStyle]} fs={fs} variant={textVariant}>{title}</StyledText>
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