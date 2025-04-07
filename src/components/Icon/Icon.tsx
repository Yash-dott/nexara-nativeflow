import React, { useMemo, type JSX } from "react";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";


type IconProps = {
    renderIcon: JSX.Element;
    color?: string;
}

const Icon: React.FC<IconProps> = ({
    renderIcon,
    color
}) => {
    const theme = useTheme(!color && !renderIcon?.props.color);

    const renderCallBackIcon = useMemo(() => {
        return React.cloneElement(renderIcon as React.ReactElement<any>,
            {
                ...renderIcon?.props,
                size: verticalScale(renderIcon?.props?.size ?? 15),
                color: color ?? (renderIcon?.props.color ?? theme?.colors.iconPrimary)
            }
        )
    }, [color, theme]);

    return (<>
        {renderCallBackIcon}
    </>)
}
export default Icon;
export type { IconProps };