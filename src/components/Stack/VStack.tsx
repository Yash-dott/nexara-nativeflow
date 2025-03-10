import React from "react";
import { View } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";


type VStackProps = ViewStyle & {
    children?: React.ReactNode;
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch' | 'baseline';
    gap?: number;
    containerStyle?: StyleProp<ViewStyle>;
}

const VStack: React.FC<VStackProps> = ({
    children,
    align,
    gap = 10,
    containerStyle,
    ...rest
}) => {

    const viewProps = {
        flexDirection: 'column',
        alignItems: align,
        gap,

    };
    return (<>
        <View
            {...viewProps}
            style={containerStyle}
            {...rest}
        >
            {children}
        </View>
    </>)
}
export default VStack;
export type { VStackProps };