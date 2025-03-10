import React from "react";
import { StyledView } from "../StyledComponents";
import { verticalScale } from "../../helpers/ResponsiveCalculations";


type IconProps = {
    renderIcon: JSX.Element;
}

const Icon: React.FC<IconProps> = ({
    renderIcon,
}) => {

    return (<>
        <StyledView>
            {React.cloneElement(renderIcon as React.ReactElement<any>, { ...renderIcon?.props, size: verticalScale(renderIcon?.props?.size ?? 15) })}
        </StyledView>
    </>)
}
export default Icon;
export type { IconProps };