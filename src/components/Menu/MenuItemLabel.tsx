import React from "react";
import type { ReactNode } from "react";
import type { StyleProp, TextStyle } from "react-native";
import { StyledText } from "../StyledComponents";
import type { TypographyVariant } from "../../types/styledTextTypes";

type MenuItemLabelProps = TextStyle & {
    fs?: number;
    textVariant?: TypographyVariant;
    style?: StyleProp<TextStyle>;
    children?: ReactNode;
}

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
            // style={[style, {fontSize: 14}]}
            // style={[style, {fontSize: responsiveFontSize(14)}]}
            {...rest}
        >
            {children}
        </StyledText>
    </>)
}
export default MenuItemLabel;
export type { MenuItemLabelProps };