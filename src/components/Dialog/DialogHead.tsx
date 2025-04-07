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
    const dynamicStyles = {
        borderBottomWidth: variant == 'default' ? 0.7 : 0,
        padding: moderateScale(variant === 'default' ? 16 : 25),
    };
    return (<>

        <View style={[STYLES.CONTAINER, dynamicStyles, containerStyle]}>
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


const STYLES = StyleSheet.create({
    CONTAINER: {
        borderColor: '#d4d4d4',
        paddingBottom: moderateScale(16),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    HEADER_TEXT: {
        fontWeight: 'bold',
        color: '#000',
    }
});
