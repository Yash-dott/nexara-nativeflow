import React from "react";
import { Switch as NativeSwitch } from "react-native";
import LightenColorShades from "../../helpers/LightenColorShades";
import { moderateScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";
import type { SwitchProps } from "../../types";

const Switch: React.FC<SwitchProps> = ({
    checked = true,
    color,
    disabled = false,
    size = 0.8,
    activeTrackColor,
    inactiveTrackColor = '#808080',
    onChange,
    ...rest
}) => {

    const theme: any = useTheme();
    const switchColor = disabled ? '#808080' : color ?? theme.colors.primary;

    return (<>
        <NativeSwitch
            value={checked}
            trackColor={{ true: LightenColorShades(activeTrackColor ?? switchColor, 50), false: LightenColorShades(inactiveTrackColor, 60) }}
            thumbColor={switchColor}
            onValueChange={onChange}
            style={{ transform: [{ scaleX: moderateScale(size) }, { scaleY: moderateScale(size) }] }}
            disabled={disabled}
            {...rest}
        />
    </>)
}
export default Switch;
export type { SwitchProps };