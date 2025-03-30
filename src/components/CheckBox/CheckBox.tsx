import React, { useEffect, useRef, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback, Animated, type ViewStyle } from "react-native";
import { StyledText, StyledView } from "../StyledComponents";
import { useTheme } from "../../hooks";
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { Check } from "../../assets/svg";
import type { CheckBoxProps } from "../../types";


const CheckBox: React.FC<CheckBoxProps> = ({
    variant = 'square',
    isChecked = false,
    defaultValue = false,
    activeBgColor,
    inActiveBgColor = 'transparent',
    iconColor,
    disableBuiltInState = false,
    disabled = false,
    text,
    fs,
    textVariant = 'h6',
    size = 20,
    iconSize,
    containerStyle,
    textStyle,
    checkBoxStyle,
    onPress,
}) => {
    const [isCheckboxChecked, setIsCheckboxChecked] = useState<boolean>(defaultValue);

    useEffect(() => {
        setIsCheckboxChecked(defaultValue);
    }, [defaultValue]);

    const scaleVal = useRef(new Animated.Value(1)).current;
    const { colors }: any = useTheme();
    activeBgColor = disabled ? colors.disable : activeBgColor ?? colors.primary;
    iconSize = iconSize ?? size / 1.5;
    const bgColor = (!disableBuiltInState && isCheckboxChecked) || (disableBuiltInState && isChecked) ? activeBgColor : inActiveBgColor;
    const textColor = disabled ? colors.textDisable : colors.textPrimary;

    const dynamicMainContStyles: ViewStyle = {
        height: verticalScale(size),
        width: verticalScale(size),
        borderColor: disabled ? colors.disable : activeBgColor,
        borderRadius: variant === 'square' ? 5 : verticalScale(size),
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
        <StyledView>
            <TouchableWithoutFeedback
                onPressIn={() => animateScale(0.8)}
                onPressOut={() => animateScale(1)}
                onPress={onUserClick}
                disabled={disabled}
            >
                <StyledView style={[STYLES.CONTAINER, containerStyle]}>

                    <Animated.View style={[STYLES.CHECKBOX_PARENT_CONT, dynamicMainContStyles, checkBoxStyle, animatedStyle]}>
                        {
                            (disableBuiltInState ? isChecked : isCheckboxChecked) &&
                            <Check
                                color={iconColor ?? colors.iconSecondary}
                                size={verticalScale(iconSize)}
                            />
                        }
                    </Animated.View>
                    {
                        text &&
                        <StyledText style={textStyle} fs={fs} color={textColor} variant={textVariant} primary>{text}</StyledText>
                    }

                </StyledView>
            </TouchableWithoutFeedback>
        </StyledView>
    )
}
export default CheckBox;
export type { CheckBoxProps };

const STYLES = StyleSheet.create({
    CONTAINER: {
        flexDirection: 'row',
        gap: horizontalScale(10),
        alignItems: 'center',
    },
    CHECKBOX_PARENT_CONT: {
        borderWidth: 0.8,
        alignItems: 'center',
        justifyContent: 'center',
        padding: verticalScale(7)
    }
});