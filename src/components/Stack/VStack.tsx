import React, { useMemo } from "react";
import { View } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";
import type { VStackProps } from "../../types";

const VStack: React.FC<VStackProps> = ({
    children,
    align,
    gap = 10,
    style,
    ref,
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
            style={style}
            ref={ref}
            {...rest}
        >
            {children}
        </View>
    </>)
}
export default VStack;
export type { VStackProps };