import React from "react";
import { View } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";


type HStackProps = ViewStyle & {
    children?: React.ReactNode;
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch' | 'baseline';
    fWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    gap?: number;
    containerStyle?: StyleProp<ViewStyle>;
}

const HStack: React.FC<HStackProps> = ({
    children,
    justify = 'flex-start',
    align = 'center',
    fWrap = 'wrap',
    gap = 10,
    containerStyle,
    ...rest
}) => {
    const viewProps = {
        flexDirection: 'row',
        justifyContent: justify,
        alignItems: align,
        flexWrap: fWrap,
        gap,
    };

    return (<>
        <View
            {...viewProps}
            style={[containerStyle, { flexDirection: 'row' }]}
            {...rest}
        >
            {children}
        </View>
    </>)
}
export default HStack;
export type { HStackProps };