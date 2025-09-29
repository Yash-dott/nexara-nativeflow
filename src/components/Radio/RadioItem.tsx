import { useMemo, type FC } from "react";
import { StyledText, StyledView } from "../StyledComponents";
import { StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";
import { horizontalScale } from "../../helpers";
import { useTheme } from "../../hooks";
import type { RadioItemProps } from "../../types";

const RadioItem: FC<RadioItemProps> = ({
    size = 22,
    stroke = 2,
    color,
    active = false,
    name,
    disabled,
    label,
    fs,
    fScale = 'base',
    ff,
    labelStyle,
    ...rest
}) => {

    const STYLES = useMemo(customStyles, []);
    const theme = useTheme();

    const themedColor = (disabled && theme?.colors.states.disabled) || (color ?? theme?.colors.brand.primary);

    const dynamicStyles: ViewStyle = {
        borderColor: themedColor,
        borderWidth: stroke,
        padding: 2,
        height: size,
        width: size,
    }
    return (<>
        <TouchableOpacity
            {...rest}
        >
            <StyledView style={STYLES.MAIN_CONT}>
                <StyledView style={[STYLES.RADIO_OUTER_CONT, dynamicStyles]}>
                    {
                        active &&
                        <StyledView style={[STYLES.RADIO_INNER_CONT]} bg={themedColor} />
                    }
                </StyledView>
                {
                    label &&
                    <StyledText variant={disabled ? 'disabled' : 'primary'} ff={ff} fs={fs} fScale={fScale} style={labelStyle} >{label}</StyledText>
                }
            </StyledView>
        </TouchableOpacity>
    </>);
}

export default RadioItem;

const customStyles = () => StyleSheet.create({
    MAIN_CONT: {
        flexDirection: 'row',
        gap: horizontalScale(15),
        alignItems: 'center',
    },
    RADIO_OUTER_CONT: {
        borderRadius: 100,
        overflow: 'hidden'
    },
    RADIO_INNER_CONT: {
        width: '100%',
        height: '100%',
        borderRadius: 100
    }
}); 
