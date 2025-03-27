import React from 'react';
import { StyleSheet } from "react-native";
import { verticalScale, horizontalScale } from "../../helpers/ResponsiveCalculations";
import { StyledText, StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import { getButtonColors } from './utils';
import TouchableRipple from '../TouchableRipple/TouchableRipple';
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
    ...props
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

    const STYLES = StyleSheet.create({
        BUTTON_CONT: {
            backgroundColor: backgroundColor,
            borderWidth: variant === 'contained' ? 0 : stroke,
            borderColor: buttonBorderColor,
            maxWidth: '100%',
        },
        BUTTON_TEXT: {
            color: buttonTextColor,
            textAlign: 'center',
            fontFamily: titleFF ?? '',
        },
        FLAT_BTN_CONT: {
            borderRadius: verticalScale(br),
            overflow: 'hidden',
            alignSelf: fullWidth ? 'stretch' : 'flex-start',
        },
        FLAT_BUTTON_CONT: {
            paddingVertical: verticalScale(paddingV),
            paddingHorizontal: horizontalScale(!fullWidth ? paddingH : 30),
            borderRadius: verticalScale(br),
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
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

    return (
        <>
            {type === 'flat' && (
                <StyledView style={STYLES.FLAT_BTN_CONT}>
                    <TouchableRipple
                        onPress={onPress}
                        rippleColor={rippleColor}
                        disabled={disabled}
                        // ref={ref}
                        {...props}
                    >
                        <StyledView style={[STYLES.FLAT_BUTTON_CONT, STYLES.BUTTON_CONT, buttonContainerStyle]}>
                            {(renderLeftIcon || (fullWidth && renderRightIcon)) && (
                                <StyledView f={fullWidth ? 1 : undefined}>
                                    {renderLeftIcon && React.cloneElement(renderLeftIcon, {
                                        color: buttonIconColor
                                    })}
                                </StyledView>
                            )}

                            <StyledView
                                flexShrink={1}
                                f={fullWidth ? 8 : undefined}
                            >
                                <StyledText numberOfLines={1} fs={titleFS} variant={titleVariant} style={[STYLES.BUTTON_TEXT, textStyle]}>
                                    {title}
                                </StyledText>
                            </StyledView>

                            {(renderRightIcon || (fullWidth && renderLeftIcon)) && (
                                <StyledView alignItems='flex-end' f={fullWidth ? 1 : undefined}>
                                    {renderRightIcon && React.cloneElement(renderRightIcon, {
                                        color: buttonIconColor
                                    })}
                                </StyledView>
                            )}
                        </StyledView>
                    </TouchableRipple>
                </StyledView>
            )}

            {type === 'round' && (
                <StyledView
                    alignSelf='flex-start'
                    borderRadius={verticalScale(100)}
                    overflow='hidden'
                    style={{
                        overflow: 'hidden',
                        borderRadius: verticalScale(100),
                        alignSelf: 'flex-start'
                    }}
                >
                    <TouchableRipple
                        onPress={onPress}
                        rippleColor={rippleColor}
                        {...props}
                    >
                        <StyledView
                            style={[STYLES.BUTTON_CONT, STYLES.ROUND_BUTTON_CONT, buttonContainerStyle]}
                        >
                            {renderIcon}
                        </StyledView>
                    </TouchableRipple>
                </StyledView>
            )}
        </>
    );
};

export default Button;
export type { ButtonProps };
