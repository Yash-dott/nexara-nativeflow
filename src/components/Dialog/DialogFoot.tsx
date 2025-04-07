import React from 'react';
import { StyleSheet } from 'react-native';
import Stack from '../Stack';
import { moderateScale } from '../../helpers/ResponsiveCalculations';
import type { DialogFootProps } from '../../types';


interface props extends DialogFootProps {
    variant?: 'classic' | 'default';
}

const DialogFoot: React.FC<props> = ({
    variant,
    containerStyle,
    children
}) => {
    const dynamicStyles = {
        borderTopWidth: variant === 'default' ? 0.7 : 0,
        padding: moderateScale(variant === 'default' ? 16 : 20),
        paddingHorizontal: moderateScale(variant === 'default' ? 16 : 25),
    };
    return (<>
        <Stack.H style={[STYLES.CONTAINER, dynamicStyles, containerStyle]}>
            {children}
        </Stack.H>
    </>);
}
export default DialogFoot;
export type { DialogFootProps };

const STYLES = StyleSheet.create({
    CONTAINER: {
        borderColor: '#d4d4d4',
        justifyContent: 'flex-end',
        gap: moderateScale(15)
    },
});