import React, { useMemo } from "react";
import { View } from "react-native";
import type { ViewStyle, StyleProp, FlexStyle } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";


type VStackProps = ViewStyle & {
    children?: React.ReactNode;
    align?: FlexStyle['alignItems'];
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

    const calculatedGap: number = useMemo(() => horizontalScale(gap), [gap]);
    const viewProps = {
        flexDirection: 'column',
        alignItems: align,
        gap: calculatedGap,
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