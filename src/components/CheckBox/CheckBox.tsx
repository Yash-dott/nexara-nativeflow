import { useEffect, useMemo, useRef, useState, type FC } from "react";
import { StyleSheet, TouchableWithoutFeedback, Animated, type ViewStyle } from "react-native";
import { StyledText, StyledView } from "../StyledComponents";
import { useTheme } from "../../hooks";
import { horizontalScale, verticalScale } from "../../helpers";
import { Check } from "../../assets/svg";
import type { CheckBoxProps } from "../../types";


const CheckBox: FC<CheckBoxProps> = ({
    variant = 'square',
    isChecked = false,
    defaultValue = false,
    activeBgColor,
    inActiveBgColor = 'transparent',
    iconColor,
    disableBuiltInState = false,
    disabled = false,
    label = 'Checkbox',
    fScale = 'xs',
    fs,
    ff,
    // size = 22,
    size = 20,
    iconSize,
    containerStyle,
    labelStyle,
    checkBoxStyle,
    onPress,
}) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(defaultValue);

    useEffect(() => {
        setIsCheckboxChecked(defaultValue);
    }, [defaultValue]);

    const STYLES = useMemo(Styles, []);

    const scaleVal = useRef(new Animated.Value(1)).current;
    const { colors }: any = useTheme();
    activeBgColor = disabled ? colors.states.disabled : activeBgColor ?? colors.brand.primary;
    iconSize = iconSize ?? size / 1.5;
    const bgColor = (!disableBuiltInState && isCheckboxChecked) || (disableBuiltInState && isChecked) ? activeBgColor : inActiveBgColor;
    const textColor = disabled ? colors.typography.disabled : colors.typography.primary;

    const dynamicMainContStyles: ViewStyle = {
        height: verticalScale(size),
        width: verticalScale(size),
        borderColor: disabled ? colors.border.default : activeBgColor,
        borderRadius: verticalScale(variant === 'square' ? 5 : size),
        backgroundColor: bgColor
    };

    const animatedStyle = {
        transform: [{ scale: scaleVal }]
    };

    const animateScale = (toValue: number) => {
        Animated.spring(scaleVal, {
            toValue,
            speed: 20,
            bounciness: 8,
            useNativeDriver: true,
        }).start();
    };
    const onUserClick = () => {
        if (!disableBuiltInState) {
            onPress?.(!isCheckboxChecked);
            setIsCheckboxChecked(!isCheckboxChecked);
        } else {
            onPress?.(!isChecked);
        }
    };
    return (
        // <StyledView>
        <StyledView style={[STYLES.CONTAINER, containerStyle]}>

            <TouchableWithoutFeedback
                onPressIn={() => animateScale(0.8)}
                onPressOut={() => animateScale(1)}
                onPress={onUserClick}
                disabled={disabled}
            >
                <Animated.View style={[STYLES.CHECKBOX_PARENT_CONT, dynamicMainContStyles, checkBoxStyle, animatedStyle]}>
                    {
                        (disableBuiltInState ? isChecked : isCheckboxChecked) &&
                        <Check
                            color={disabled ? colors.states.disabled : iconColor ?? colors.brand.onPrimary}
                            size={verticalScale(iconSize)}
                        />
                    }
                </Animated.View>
            </TouchableWithoutFeedback>
            {
                label &&
                <StyledText style={labelStyle} fs={fs} ff={ff} color={textColor} fScale={fScale}>{label}</StyledText>
            }

        </StyledView>
        // </StyledView>
    )
}
export default CheckBox;
export type { CheckBoxProps };

const Styles = () => StyleSheet.create({
    CONTAINER: {
        flexDirection: 'row',
        gap: horizontalScale(10),
        alignItems: 'center',
    },
    CHECKBOX_PARENT_CONT: {
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: horizontalScale(7)
    }
});
