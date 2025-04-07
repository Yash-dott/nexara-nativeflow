import React from 'react';
import { View, ScrollView } from 'react-native';
import { moderateScale } from '../../helpers/ResponsiveCalculations';
import type { DialogBodyProps } from '../../types';


interface props extends DialogBodyProps {
    variant?: 'classic' | 'default';
}

const DialogBody: React.FC<props> = ({
    variant,
    scrollEnable = true,
    containerStyle,
    children,
}) => {
    const style = {
        paddingVertical: variant == 'default' ? moderateScale(16) : 0,
        paddingHorizontal: moderateScale(variant == 'default' ? 16 : 25),
        gap: 20,
    };
    return (<>

        <ScrollView scrollEnabled={scrollEnable}>
            <View style={[style, containerStyle]} pointerEvents='box-none'>
                {children}
            </View>
        </ScrollView>
    </>);
}
export default DialogBody;
export type { DialogBodyProps };