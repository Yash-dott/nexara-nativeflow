import React from "react";
import type { ReactNode } from "react";
import { TouchableOpacity } from "react-native";
import type { TouchableOpacityProps, ViewStyle, StyleProp } from "react-native";
import { StyledView } from "../StyledComponents";
import { horizontalScale, moderateScale, verticalScale } from "../../helpers/ResponsiveCalculations";

type MenuItemProps = TouchableOpacityProps & {
    paddingV?: number;
    paddingH?: number;
    gap?: number;
    name?: string;
    style?: StyleProp<ViewStyle>;
    children?: ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = ({
    // paddingV = 12,
    // paddingH = 12,
    paddingV = 11,
    paddingH = 17,
    gap = 12,
    style,
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
                gap={moderateScale(gap)}
                style={style}
            >
                {children}
            </StyledView>
        </TouchableOpacity>
    </>)
}
export default MenuItem;
export type { MenuItemProps };