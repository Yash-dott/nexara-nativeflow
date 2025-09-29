import type { FC } from "react";
import type { ViewStyle } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";
import type { HStackProps } from "../../types";
import { StyledView } from "../StyledComponents";

const HStack: FC<HStackProps> = ({
    align = 'center',
    fWrap = 'wrap',
    gap = 10,
    containerStyle,
    children,
    ...rest
}) => {

    const viewProps: ViewStyle = {
        gap: horizontalScale(gap),
        flexDirection: 'row',
        alignItems: align,
        flexWrap: fWrap,
    };

    return (<>
        <StyledView
            style={[viewProps, containerStyle]}
            {...rest}
        >
            {children}
        </StyledView>
    </>)
}
export default HStack;
export type { HStackProps };