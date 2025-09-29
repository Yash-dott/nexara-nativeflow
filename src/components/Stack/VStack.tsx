import type { FC } from "react";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import type { VStackProps } from "../../types";
import { StyledView } from "../StyledComponents";
import type { ViewStyle } from "react-native";

const VStack: FC<VStackProps> = ({
    gap = 10,
    containerStyle,
    children,
    ...rest
}) => {
    const viewProps: ViewStyle = {
        flexDirection: 'column',
        gap: verticalScale(gap),
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
export default VStack;
export type { VStackProps };