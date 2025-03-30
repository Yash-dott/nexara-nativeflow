import React, { useMemo } from "react";
import { View } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";
import type { ViewStyle } from 'react-native';
import type { HStackProps } from "../../types";

const HStack: React.FC<HStackProps> = ({
    justify,
    align = 'center',
    fWrap = 'wrap',
    gap = 10,
    style,
    children,
    ref,
    ...rest
}) => {
    const calculatedGap: number = useMemo(() => horizontalScale(gap), [gap]);
    
    const viewProps: ViewStyle = {
        gap: calculatedGap,
        flexDirection: 'row',
        justifyContent: justify,
        alignItems: align,
        flexWrap: fWrap,
    };

    return (<>
        <View
            style={[viewProps, style]}
            ref={ref}
            {...rest}
        >
            {children}
        </View>
    </>)
}
export default HStack;
export type { HStackProps };