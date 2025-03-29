import React from "react";
import { StyledText } from "../StyledComponents";
import type { MenuItemLabelProps } from "../../types";

const MenuItemLabel: React.FC<MenuItemLabelProps> = ({
    fs,
    style,
    children,
    textVariant = 'h5',
    ...rest
}) => {

    return (<>
        <StyledText
            fs={fs}
            variant={textVariant}
            color="#000"
            numberOfLines={1}
            flexShrink={1}
            {...rest}
        >
            {children}
        </StyledText>
    </>)
}
export default MenuItemLabel;
export type { MenuItemLabelProps };