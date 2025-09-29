import { type FC } from "react";
import { TouchableOpacity } from "react-native";
import { StyledView } from "../StyledComponents";
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import type { MenuItemProps } from "../../types";

const MenuItem: FC<MenuItemProps> = ({
    paddingV = 11,
    paddingH = 17,
    gap = 12,
    itemStyle,
    children,
    ...rest
}) => {

    return (<>
        <TouchableOpacity
            {...rest}
        >
            <StyledView
                paddingHorizontal={horizontalScale(paddingH)}
                paddingVertical={verticalScale(paddingV)}
                flexDirection='row'
                align="center"
                gap={horizontalScale(gap)}
                style={itemStyle}
            >
                {children}
            </StyledView>
        </TouchableOpacity>
    </>)
}
export default MenuItem;
export type { MenuItemProps };