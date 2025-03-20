import React from 'react';
import type { ReactNode } from "react";
import { StyleSheet } from 'react-native';
import type { StyleProp, ViewStyle } from "react-native";
import Stack from '../Stack';
import { moderateScale } from '../../helpers/ResponsiveCalculations';


type DialogFootProps = {
    variant?: 'classic' | 'default';
    containerStyle?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

const DialogFoot: React.FC<DialogFootProps> = ({
    variant,
    containerStyle,
    children
}) => {

    const STYLES = StyleSheet.create({
        CONTAINER: {
            borderTopWidth: variant === 'default' ? 0.7 : 0,
            borderColor: '#d4d4d4',
            padding: moderateScale(variant === 'default' ? 16 : 20),
            paddingHorizontal: moderateScale(variant === 'default' ? 16 : 25),
            justifyContent:'flex-end',
            gap: moderateScale(15)
        },
    });
    return (<>
        <Stack.H justify='flex-end' gap={moderateScale(15)} containerStyle={[STYLES.CONTAINER, containerStyle]}>
            {children}
        </Stack.H>
    </>);
}
export default DialogFoot;
export type { DialogFootProps };