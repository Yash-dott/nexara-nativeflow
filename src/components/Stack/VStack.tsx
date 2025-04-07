import React, { useMemo } from "react";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import type { VStackProps } from "../../types";
import { StyledView } from "../StyledComponents";
import type { ViewStyle } from "react-native";

const VStack: React.FC<VStackProps> = ({
    children,
    align,
    gap = 10,
    style,
    ...rest
}) => {

    const calculatedGap: number = useMemo(() => verticalScale(gap), [gap]);

    const viewProps: ViewStyle = {
        flexDirection: 'column',
        alignItems: align,
        gap: calculatedGap,
    };
    return (<>
        <StyledView
            style={[viewProps, style]}
            {...rest}
        >
            {children}
        </StyledView>
    </>)
}
export default VStack;
export type { VStackProps };