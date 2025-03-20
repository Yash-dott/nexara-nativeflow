import React, { useEffect, useState } from "react";
import { StyleSheet, TouchableWithoutFeedback } from "react-native";
import type { ViewStyle, TextStyle, StyleProp } from "react-native";
import { StyledText, StyledView } from "../StyledComponents";
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from "react-native-reanimated";
import { useTheme } from "../../hooks";
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { Check } from "../../assets/svg";
import type { TypographyVariant } from "../../types/styledTextTypes";


type CheckBoxProps = {
    variant?: 'square' | 'round',
    isChecked?: boolean,
    defaultValue?: boolean,
    activeBgColor?: string,
    inActiveBgColor?: string,
    iconColor?: string,
    disableBuiltInState?: boolean,
    disabled?: boolean,
    text?: string,
    fs?: number,
    textVariant?: TypographyVariant,
    size?: number,
    iconSize?: number,
    containerStyle?: StyleProp<ViewStyle>,
    checkBoxStyle?: StyleProp<ViewStyle>,
    textStyle?: StyleProp<TextStyle>,
    onPress?: (e: boolean) => void,
}

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
    textVariant = 'h5',
    size = 18,
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

    const scaleVal = useSharedValue(1);
    const { colors }: any = useTheme();
    activeBgColor = disabled ? colors.disable : activeBgColor ?? colors.primary;
    iconSize = iconSize ?? size / 1.5;
    const bgColor = (!disableBuiltInState && isCheckboxChecked) || (disableBuiltInState && isChecked) ? activeBgColor : inActiveBgColor;

    const STYLES = StyleSheet.create({
        CONTAINER: {
            flexDirection: 'row',
            gap: horizontalScale(10),
            alignItems: 'center',
            alignSelf: 'flex-start',
        },
        CHECKBOX_PARENT_CONT: {
            height: verticalScale(size),
            width: verticalScale(size),
            borderWidth: 0.8,
            borderColor: disabled ? colors.disable : activeBgColor,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: variant === 'square' ? 5 : verticalScale(size),
            padding: verticalScale(7),
            backgroundColor: bgColor,
        }
    });

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ scale: scaleVal.value }]
    }));

    const onUserClick = () => {
        if (!disableBuiltInState) {
            onPress?.(!isCheckboxChecked);
            setIsCheckboxChecked(!isCheckboxChecked);
        } else {
            onPress?.(!isChecked);
        }
    };
    return (<>
        <TouchableWithoutFeedback
            onPressIn={() => scaleVal.value = withSpring(0.8)}
            onPressOut={() => scaleVal.value = withSpring(1)}
            onPress={onUserClick}
            disabled={disabled}
        >
            <StyledView style={[STYLES.CONTAINER, containerStyle]}>

                <Animated.View style={[STYLES.CHECKBOX_PARENT_CONT, checkBoxStyle, animatedStyle]}>
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
                    <StyledText style={textStyle} fs={fs} variant={textVariant} primary>{text}</StyledText>
                }

            </StyledView>
        </TouchableWithoutFeedback>
    </>)
}
export default CheckBox;
export type { CheckBoxProps };