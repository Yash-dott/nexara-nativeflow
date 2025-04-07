import { useMemo } from 'react';
import { TextInput, StyleSheet, type ViewStyle } from 'react-native';
import type { TextStyle } from 'react-native';
import { responsiveFontSize, verticalScale, horizontalScale } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import { StyledText, StyledView } from '../StyledComponents';
import type { UserInputProps } from '../../types';
import generateColors from './generateColors';

const UserInput: React.FC<UserInputProps> = ({
    variant = 'standard',
    label,
    bg,
    br = 10,
    stroke = 1,
    labelColor,
    textVariant = {
        label: 'h5',
        helperText: 'h6',
    },
    inputTextColor,
    strokeColor,
    cursorColor,
    placeholderColor,
    inputFs = 13,
    labelFs,
    helperTextFS,
    placeholder = 'Please enter...',
    disabled = false,
    isError = false,
    helperText = '',
    multiline = false,
    renderLeftIcon,
    renderRightIcon,
    styles,
    ref,
    ...rest
}) => {

    const theme: any = useTheme();

    const {
        computedCursorColor,
        computedPlaceholderColor,
        computedLabelColor
    } = useMemo(() => generateColors(theme, isError, cursorColor, placeholderColor, labelColor), [theme, isError, cursorColor, placeholderColor, labelColor]);

    const dynamicStyles = {
        INPUT_CONT: {
            alignItems: multiline ? 'flex-start' : 'center' as ViewStyle['alignItems'],
            backgroundColor: disabled ? theme.colors.disable : bg ?? theme.colors.inputBgColor,
            borderColor: isError ? theme.colors.error : strokeColor ?? theme.colors.outline,
            borderWidth: variant === 'standard' ? 0 : stroke,
            borderBottomWidth: stroke,
            borderRadius: verticalScale(br),
            height: multiline ? undefined : verticalScale(48),
            paddingVertical: multiline ? horizontalScale(10) : undefined,
        },
        INPUT: {
            color: disabled ? theme.colors.textDisable : isError ? theme.colors.error : inputTextColor ?? theme.colors.textPrimary,
            fontSize: responsiveFontSize(inputFs),
            textAlignVertical: (multiline ? 'top' : 'center') as TextStyle['textAlignVertical'],
            minHeight: multiline ? 100 : undefined,
            maxHeight: multiline ? 150 : undefined,
        },
        ERROR_HELPER_TEXT: {
            color: theme.colors.error,
        }
    };

    return (<>
        <StyledView gap={verticalScale(5)} style={styles?.mainContainer} w='100%'>
            {
                label &&
                <StyledText variant={textVariant?.label} fs={labelFs} color={computedLabelColor} style={styles?.label}>{label}</StyledText>
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
                    {...rest}
                />
                {
                    renderRightIcon
                }
            </StyledView>
            {
                (isError && helperText) &&
                <StyledText
                    variant={textVariant?.helperText}
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
};
export default UserInput;
export type { UserInputProps };

const STYLES = StyleSheet.create({
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