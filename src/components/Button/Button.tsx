import React, { useMemo } from 'react';
import type { FC, JSX } from 'react';
import { ActivityIndicator, StyleSheet, TouchableOpacity, type ViewStyle } from "react-native";
import { verticalScale, horizontalScale } from "../../helpers/ResponsiveCalculations";
import { StyledText, StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import { getButtonColors } from './utils';
import type { ButtonProps } from '../../types';


const Button: FC<ButtonProps> = ({
    variant = 'contained',
    type = 'flat',
    fullWidth = false,
    paddingH = 19,
    paddingV = 12,
    bg,
    br = 8,
    stroke = 1,
    strokeColor,
    titleColor,
    title,
    fScale = 'base',
    fs,
    ff,
    size = 50,
    rippleColor,
    renderIcon,
    renderLeftIcon,
    renderRightIcon,
    disabled = false,
    loading = false,
    containerStyle,
    titleStyle,
    onPress,
    children,
    ...rest
}) => {
    const theme: any = useTheme();

    const { backgroundColor, buttonTextColor, buttonBorderColor } = getButtonColors({
        theme,
        variant,
        bg,
        titleColor,
        strokeColor,
        disabled,
        loading
    });

    const STYLES = useMemo(customStyles, []);

    const dynamicStyles = {
        BUTTON_CONT: {
            backgroundColor: backgroundColor,
            borderWidth: variant === 'contained' ? 0 : stroke,
            borderColor: buttonBorderColor,
        },
        BUTTON_TEXT: {
            color: buttonTextColor,
            fontFamily: ff ?? '',
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
                color: element.props.color ?? buttonTextColor
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
                    disabled={disabled || loading}
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
                            containerStyle,
                        ]}
                    >
                        {(renderLeftIcon || (fullWidth && renderRightIcon)) && (
                            <StyledView f={fullWidth ? 1 : undefined}>
                                {renderLeftIcon && cloneElement(renderLeftIcon)}
                            </StyledView>
                        )}

                        <StyledView flexShrink={1} f={fullWidth ? 8 : undefined}>
                            {!loading ? (
                                (title ?? children) ? (
                                    <StyledText
                                        numberOfLines={1}
                                        fs={fs}
                                        fScale={fScale}
                                        style={[
                                            STYLES.BUTTON_TEXT,
                                            dynamicStyles.BUTTON_TEXT,
                                            titleStyle,
                                        ]}
                                    >
                                        {title ?? children}
                                    </StyledText>
                                ) : (
                                    renderIcon && cloneElement(renderIcon)
                                )
                            ) : (
                                <ActivityIndicator
                                    color={dynamicStyles.BUTTON_TEXT.color}
                                    size="small"
                                />
                            )}
                        </StyledView>

                        {(renderRightIcon || (fullWidth && renderLeftIcon)) && (
                            <StyledView alignItems="flex-end" f={fullWidth ? 1 : undefined}>
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
                            containerStyle
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

const customStyles = () => StyleSheet.create({
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



