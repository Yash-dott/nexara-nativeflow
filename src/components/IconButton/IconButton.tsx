import React, { isValidElement } from "react";
import type { ReactElement } from "react";
import { TouchableOpacity, type TouchableOpacityProps } from "react-native";
import Icon from "../Icon/Icon";


type IconButtonProps = TouchableOpacityProps & {
    rippleColor?: string;
    children?: ReactElement<{ size: number }>;
}

const IconButton: React.FC<IconButtonProps> = ({
    rippleColor,
    children,
    style,
    ...rest
}) => {

    let size = 40;

    if (!(isValidElement(children) && 'size' in children.props)) {
        return;
    }
    size = children.props.size * 1.5;

    return (<>
        <TouchableOpacity
            // rippleColor={rippleColor}
            style={[{
                borderRadius: 100,
                height: size,
                width: size,
                justifyContent: 'center',
                alignItems: 'center'
            }, style]}
            {...rest}
        >
            <Icon
                renderIcon={React.cloneElement(children as React.ReactElement<any>)}
            />
        </TouchableOpacity>
    </>)
}
export default IconButton;
export type { IconButtonProps };