import React, { useMemo } from "react";
import type { ViewStyle } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";
import type { HStackProps } from "../../types";
import { StyledView } from "../StyledComponents";

const HStack: React.FC<HStackProps> = ({
    justify,
    align = 'center',
    fWrap = 'wrap',
    gap = 10,
    style,
    children,
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
        <StyledView
            style={[viewProps, style]}
            {...rest}
        >
            {children}
        </StyledView>
    </>)
}
export default HStack;
export type { HStackProps };