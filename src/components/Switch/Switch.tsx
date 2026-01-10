import type { FC } from "react";
import { Switch as NativeSwitch } from "react-native";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";
import type { SwitchProps } from "../../types";
import Color from "color";

const Switch: FC<SwitchProps> = ({
    checked = true,
    color,
    disabled = false,
    size = 0.9,
    activeTrackColor,
    inactiveTrackColor,
    onChange,
    ...rest
}) => {

    const { colors }: any = useTheme();
    const switchColor = disabled ? colors.states.disabled : color ?? colors.brand.primary;
    const disabledAndInActiveTrackColor = colors.palette.natural[200];
    const generateActiveTrackColor = Color(colors.brand.primary).lighten(0).alpha(0.3).rgb().string();

    return (<>
        <NativeSwitch
            value={checked}
            trackColor={{ true: (disabled && disabledAndInActiveTrackColor) || (activeTrackColor ?? generateActiveTrackColor), false: (disabled && disabledAndInActiveTrackColor) || (inactiveTrackColor ?? disabledAndInActiveTrackColor) }}
            thumbColor={switchColor}
            onValueChange={onChange}
            style={{ transform: [{ scaleX: verticalScale(size) }, { scaleY: verticalScale(size) }] }}
            disabled={disabled}
            {...rest}
        />
    </>)
}
export default Switch;
export type { SwitchProps };