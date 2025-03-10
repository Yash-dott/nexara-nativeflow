import React from 'react';
import { StyleSheet } from "react-native";
import type { PressableProps, StyleProp, ViewStyle, TextStyle } from "react-native";
import { verticalScale, horizontalScale, responsiveFontSize } from "../../helpers/ResponsiveCalculations";
import { StyledText, StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import { getButtonColors } from './utils';
import type { ButtonVariant } from "./utils";
import TouchableRipple from '../TouchableRipple/TouchableRipple';


type ButtonProps = PressableProps & {
    variant?: ButtonVariant;
    type?: 'round' | 'flat'
    fullWidth?: boolean;
    paddingH?: number;
    paddingV?: number;
    bg?: string;
    br?: number;
    stroke?: number;
    strokeColor?: string;
    titleColor?: string;
    title?: string;
    titleFS?: number;
    titleFF?: string;
    size?: number;
    rippleColor?: string;
    renderIcon?: JSX.Element;
    renderLeftIcon?: JSX.Element;
    renderRightIcon?: JSX.Element;
    disabled?: boolean;
    buttonContainerStyle?: StyleProp<ViewStyle>
    textStyle?: StyleProp<TextStyle>
    onPress?: () => void
}

const Button: React.FC<ButtonProps> = ({
    variant = 'contained',
    type = 'flat',
    fullWidth = false,
    paddingH = 15,
    // paddingV = 12,
    paddingV = 11,
    bg,
    br = 5,
    stroke = 1,
    strokeColor,
    titleColor,
    title = 'Button',
    titleFS = 12,
    titleFF,
    size = 50,
    rippleColor,
    renderIcon,
    renderLeftIcon,
    renderRightIcon,
    disabled = false,
    buttonContainerStyle = {},
    textStyle,
    onPress,
    ...props
}) => {
    const theme: any = useTheme();

    const { backgroundColor, buttonTextColor, buttonBorderColor } = getButtonColors({
        theme,
        variant,
        bg,
        titleColor,
        strokeColor,
        disabled
    });
    const STYLES = StyleSheet.create({
        FLAT_BNT_SUB_CONT: {
            flex: fullWidth ? 1 : 0
        },
        BUTTON_CONT: {
            backgroundColor: backgroundColor,
            borderWidth: variant === 'contained' ? 0 : stroke,
            borderColor: buttonBorderColor,
        },
        BUTTON_TEXT: {
            color: buttonTextColor,
            textAlign: 'center',
            fontSize: responsiveFontSize(titleFS),
            fontFamily: titleFF ?? '',
        },
        FLAT_BTN_CONT: {
            borderRadius: verticalScale(br),
            overflow: 'hidden',
            alignSelf: fullWidth ? 'auto' : 'flex-start',
        },
        FLAT_BUTTON_CONT: {
            paddingVertical: verticalScale(paddingV),
            // height: verticalScale(35),
            paddingHorizontal: horizontalScale(!fullWidth ? paddingH : 30),
            borderRadius: verticalScale(br),
            flexDirection: 'row',
            alignItems: 'center',
            gap: horizontalScale(10),
        },
        ROUND_BUTTON_CONT: {
            borderRadius: verticalScale(100),
            height: verticalScale(size),
            width: verticalScale(size),
            alignItems: 'center',
            justifyContent: 'center',
        }
    });

    return (<>
        {
            type === 'flat' &&
            <StyledView style={STYLES.FLAT_BTN_CONT}>

                <TouchableRipple
                    onPress={onPress}
                    rippleColor={rippleColor}
                    {...props}
                >

                    <StyledView style={[STYLES.FLAT_BUTTON_CONT, STYLES.BUTTON_CONT, buttonContainerStyle]}>
                        {
                            (fullWidth || renderLeftIcon) &&
                            <StyledView style={STYLES.FLAT_BNT_SUB_CONT}>
                                {renderLeftIcon}
                                {/* {renderLeftIcon && React.cloneElement(renderLeftIcon, { color: '#000', size: moderateScale(iconSize), ...renderLeftIcon?.props })} */}
                            </StyledView>
                        }

                        <StyledView f={fullWidth ? 8 : 0}>
                            <StyledText numberOfLines={1} variant='h6' style={[STYLES.BUTTON_TEXT, textStyle]} >{title}</StyledText>
                        </StyledView>
                        {
                            (fullWidth || renderRightIcon) &&
                            <StyledView style={STYLES.FLAT_BNT_SUB_CONT} alignItems='flex-end'>
                                {renderRightIcon}
                                {/* {renderRightIcon && React.cloneElement(renderRightIcon, { color: '#000', size: moderateScale(iconSize), ...renderRightIcon?.props })} */}
                            </StyledView>
                        }
                    </StyledView>
                </TouchableRipple>

            </StyledView>

        }
        {
            type == 'round' &&

            <StyledView
                alignSelf='flex-start'
                overflow='hidden'
                borderRadius={verticalScale(100)}
            >

                <TouchableRipple
                    onPress={onPress}
                    rippleColor={rippleColor}
                    {...props}
                >
                    <StyledView
                        style={[STYLES.BUTTON_CONT, STYLES.ROUND_BUTTON_CONT, buttonContainerStyle,]}
                    >
                        {/* {renderIcon && React.cloneElement(renderIcon, { color: '#000', size: moderateScale(iconSize), ...renderIcon?.props })} */}
                        {renderIcon}
                        {/* renderIcon && renderIcon() */}
                    </StyledView>
                </TouchableRipple>

            </StyledView>
        }

    </>);
};
export default Button;
export type { ButtonProps };
