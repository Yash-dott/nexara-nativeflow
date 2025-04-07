import React from "react";
import type { ReactNode } from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import { StyledView } from "../StyledComponents";
// import TouchableRipple from "../TouchableRipple/TouchableRipple";
import Icon from "../Icon/Icon";
import { verticalScale } from "../../helpers/ResponsiveCalculations";


type IconButtonProps = TouchableOpacityProps & {
    rippleColor?: string;
    children?: ReactNode;
}

const IconButton: React.FC<IconButtonProps> = ({
    rippleColor,
    children,
    ...rest
}) => {

    return (<>
        <StyledView style={{ alignSelf: 'flex-start' }}>
            <TouchableOpacity
                // rippleColor={rippleColor}
                style={{ borderRadius: 100, padding: verticalScale(8) }}
                {...rest}
            >
                <Icon
                    renderIcon={React.cloneElement(children as React.ReactElement<any>)}
                />
            </TouchableOpacity>
        </StyledView>
    </>)
}
export default IconButton;
export type { IconButtonProps };