import { type FC } from "react";
import { StyledText } from "../StyledComponents";
import type { MenuItemLabelProps } from "../../types";

const MenuItemLabel: FC<MenuItemLabelProps> = ({
    children,
    ...rest
}) => {
    return (<>
        <StyledText
            numberOfLines={1}
            flexShrink={1}
            fScale='sm'
            variant='secondary'
            {...rest}
        >
            {children}
        </StyledText>
    </>)
}
export default MenuItemLabel;
export type { MenuItemLabelProps };