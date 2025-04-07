import React from 'react';
import type { JSX } from 'react';
import { StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";
import { verticalScale, horizontalScale } from "../../helpers/ResponsiveCalculations";
import { StyledText, StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import { getButtonColors } from './utils';
import type { ButtonProps } from '../../types';


const Button: React.FC<ButtonProps> = ({
    variant = 'contained',
    type = 'flat',
    fullWidth = false,
    paddingH = 19,
    paddingV = 14,
    bg,
    br = 5,
    stroke = 1,
    strokeColor,
    titleColor,
    title = 'Button',
    titleFS,
    titleVariant = 'h5',
    titleFF,
    size = 50,
    rippleColor,
    renderIcon,
    renderLeftIcon,
    renderRightIcon,
    disabled = false,
    buttonContainerStyle,
    textStyle,
    onPress,
    ...rest
}) => {
    const theme: any = useTheme();

    const { backgroundColor, buttonTextColor, buttonBorderColor, buttonIconColor } = getButtonColors({
        theme,
        variant,
        bg,
        titleColor,
        strokeColor,
        disabled
    });
    const dynamicStyles = {
        BUTTON_CONT: {
            backgroundColor: backgroundColor,
            borderWidth: variant === 'contained' ? 0 : stroke,
            borderColor: buttonBorderColor,
        },
        BUTTON_TEXT: {
            color: buttonTextColor,
            fontFamily: titleFF ?? '',
        },
        FLAT_BTN_MAIN_CONT: {
            borderRadius: verticalScale(br),
            alignSelf: fullWidth ? 'stretch' : 'flex-start' as ViewStyle['alignSelf'],
        },
        FLAT_BTN_INNER_CONT: {
            paddingVertical: verticalScale(paddingV),
            paddingHorizontal: horizontalScale(!fullWidth ? paddingH : 30),
            borderRadius: verticalScale(br),
        },
        ROUND_BTN_INNER_CONT: {
            height: verticalScale(size),
            width: verticalScale(size),
        }
    };

    const cloneElement = (element: JSX.Element): JSX.Element | null => {
        if (React.isValidElement<{ color?: string }>(element)) {
            return React.cloneElement(element, {
                color: buttonIconColor
            })
        }
        return null;
    }

    return (<>
        {type === 'flat' && (
            <StyledView style={[STYLES.FLAT_BTN_MAIN_CONT, dynamicStyles.FLAT_BTN_MAIN_CONT]}>
                <TouchableOpacity
                    onPress={onPress}
                    // rippleColor={rippleColor}
                    disabled={disabled}
                    // ref={ref}
                    {...rest}
                >

                    {/* <TouchableRipple
                    onPress={onPress}
                    rippleColor={rippleColor}
                    disabled={disabled}
                    // ref={ref}
                    {...rest}
                > */}
                    <StyledView
                        style={[
                            STYLES.FLAT_BTN_INNER_CONT,
                            STYLES.BUTTON_CONT,
                            dynamicStyles.FLAT_BTN_INNER_CONT,
                            dynamicStyles.BUTTON_CONT,
                            buttonContainerStyle
                        ]}>
                        {(renderLeftIcon || (fullWidth && renderRightIcon)) && (
                            <StyledView f={fullWidth ? 1 : undefined}>
                                {renderLeftIcon && cloneElement(renderLeftIcon)}
                            </StyledView>
                        )}

                        <StyledView
                            flexShrink={1}
                            f={fullWidth ? 8 : undefined}
                        >
                            <StyledText numberOfLines={1} fs={titleFS} variant={titleVariant}
                                style={[
                                    STYLES.BUTTON_TEXT,
                                    dynamicStyles.BUTTON_TEXT,
                                    textStyle
                                ]}
                            >
                                {title}
                            </StyledText>
                        </StyledView>

                        {(renderRightIcon || (fullWidth && renderLeftIcon)) && (
                            <StyledView alignItems='flex-end' f={fullWidth ? 1 : undefined}>
                                {renderRightIcon && cloneElement(renderRightIcon)}
                            </StyledView>
                        )}
                    </StyledView>
                    {/* </TouchableRipple> */}
                </TouchableOpacity>

            </StyledView>
        )}

        {type === 'round' && (
            <StyledView style={STYLES.ROUND_BTN_MAIN_CONT} >
                <TouchableOpacity
                    onPress={onPress}
                    // rippleColor={rippleColor}
                    {...rest}
                >
                    <StyledView
                        style={[
                            STYLES.BUTTON_CONT,
                            STYLES.ROUND_BTN_INNER_CONT,
                            dynamicStyles.BUTTON_CONT,
                            dynamicStyles.ROUND_BTN_INNER_CONT,
                            buttonContainerStyle
                        ]}
                    >
                        {renderIcon && cloneElement(renderIcon)}
                    </StyledView>
                </TouchableOpacity>
            </StyledView>
        )}
    </>
    );
};

export default Button;
export type { ButtonProps };

const STYLES = StyleSheet.create({
    BUTTON_CONT: {
        maxWidth: '100%',
    },
    BUTTON_TEXT: {
        textAlign: 'center',
    },
    FLAT_BTN_MAIN_CONT: {
        overflow: 'hidden',
    },
    FLAT_BTN_INNER_CONT: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: horizontalScale(10),
    },
    ROUND_BTN_MAIN_CONT: {
        overflow: 'hidden',
        borderRadius: verticalScale(100),
        alignSelf: 'flex-start',
    },
    ROUND_BTN_INNER_CONT: {
        alignItems: 'center',
        justifyContent: 'center',
    }
});



