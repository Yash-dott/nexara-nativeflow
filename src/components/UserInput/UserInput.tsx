import { forwardRef, useMemo, useState } from 'react';
import { TextInput, StyleSheet, type ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import { responsiveFontSize, verticalScale, horizontalScale } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import { StyledText, StyledView } from '../StyledComponents';
import type { UserInputProps } from '../../types';
import generateColors from './generateColors';

const UserInput = forwardRef<TextInput, UserInputProps>(({
    variant = 'standard',
    label,
    bg,
    br = 10,
    stroke = 1,
    labelColor,
    textScale = {
        label: 'sm',
        inputText: 'sm',
        helperText: 'xs',
    },
    inputTextColor,
    strokeColor,
    cursorColor,
    placeholderColor,
    inputFs,
    labelFs,
    helperTextFS,
    placeholder = 'Please enter...',
    disabled = false,
    isError = false,
    helperText,
    multiline = false,
    renderLeftIcon,
    renderRightIcon,
    styles,
    ...rest
}, ref) => {

    const [isFocused, setIsFocused] = useState(false);

    const theme: any = useTheme();
    const STYLES = useMemo(Styles, []);

    const {
        computedCursorColor,
        computedPlaceholderColor,
        computedLabelColor
    } = useMemo(() => generateColors(theme, isError, cursorColor, placeholderColor, labelColor), [theme, isError, cursorColor, placeholderColor, labelColor]);

    const dynamicStyles = {
        INPUT_CONT: {
            alignItems: multiline ? 'flex-start' : 'center' as ViewStyle['alignItems'],
            backgroundColor: disabled && theme.colors.states.disabled || isFocused && theme.colors.states.focus || (bg ?? theme.colors.background.default),
            borderColor: isError && theme.colors.semantic.danger || isFocused && theme.colors.brand.primary || (strokeColor ?? theme.colors.border.default),
            borderWidth: variant === 'standard' ? 0 : stroke,
            borderBottomWidth: stroke,
            borderRadius: verticalScale(br),
            height: multiline ? undefined : verticalScale(47),
            paddingVertical: multiline ? horizontalScale(10) : undefined,
        },
        INPUT: {
            color: disabled ? theme.colors.typography.disabled : isError ? theme.colors.semantic.danger : inputTextColor ?? theme.colors.typography.primary,
            //@ts-ignore
            fontSize: responsiveFontSize(inputFs ?? theme.sizes.typography[textScale.inputText]),
            textAlignVertical: (multiline ? 'top' : 'center') as TextStyle['textAlignVertical'],
            minHeight: multiline ? 100 : undefined,
            maxHeight: multiline ? 150 : undefined,
        },
        ERROR_HELPER_TEXT: {
            color: theme.colors.semantic.danger,
        }
    };

    return (<>
        <StyledView gap={verticalScale(5)} style={styles?.mainContainer} w='100%'>
            {
                label &&
                <StyledText fScale={textScale?.label} fs={labelFs} color={computedLabelColor} style={styles?.label}>{label}</StyledText>
            }
            <StyledView
                style={[STYLES.INPUT_CONT, dynamicStyles.INPUT_CONT, styles?.inputContainer]}
            >
                {
                    renderLeftIcon
                }
                <TextInput
                    ref={ref}
                    style={[STYLES.INPUT, dynamicStyles.INPUT, styles?.input]}
                    placeholder={placeholder}
                    placeholderTextColor={computedPlaceholderColor}
                    editable={!disabled}
                    multiline={multiline}
                    cursorColor={computedCursorColor}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...rest}
                />
                {
                    renderRightIcon
                }
            </StyledView>
            {
                (isError && helperText) &&
                <StyledText
                    fScale={textScale?.helperText}
                    fs={helperTextFS}
                    style={[
                        STYLES.ERROR_HELPER_TEXT,
                        dynamicStyles.ERROR_HELPER_TEXT,
                        styles?.helperText
                    ]}
                >
                    {helperText}
                </StyledText>
            }
        </StyledView>
    </>)
});
export default UserInput;
export type { UserInputProps };

const Styles = () => StyleSheet.create({
    INPUT_CONT: {
        flexDirection: 'row',
        paddingHorizontal: horizontalScale(14),
        gap: horizontalScale(10),
    },
    INPUT: {
        padding: 0,
        flex: 1,
    },
    ERROR_HELPER_TEXT: {
        paddingHorizontal: 5
    }
});