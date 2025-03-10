import React from 'react';
import { TextInput, StyleSheet, View, Text } from 'react-native';
import type { TextInputProps, ViewStyle, TextStyle, StyleProp } from "react-native";
import { responsiveFontSize, verticalScale, horizontalScale } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import { StyledView } from '../StyledComponents';


type UserInputProps = TextInputProps & {
    variant?: 'outlined' | 'standard';
    label?: string;
    bg?: string;
    br?: number;
    stroke?: number;
    labelColor?: string;
    textColor?: string;
    strokeColor?: string;
    cursorColor?: string;
    placeholderTextColor?: string;
    fs?: number;
    labelFs?: number;
    placeholder?: string;
    isError?: boolean;
    helperText?: string;
    disabled?: boolean;
    multiline?: boolean;
    renderLeftIcon?: JSX.Element;
    renderRightIcon?: JSX.Element;
    inputContStyle?: StyleProp<ViewStyle>;
    inputStyle?: StyleProp<TextStyle>;
    containerStyle?: StyleProp<ViewStyle>;
    labelStyle?: StyleProp<TextStyle>;
}


const UserInput: React.FC<UserInputProps> = ({
    variant = 'standard',
    label,
    bg = 'transparent',
    br = 5,
    stroke = 1,
    labelColor,
    textColor,
    strokeColor,
    cursorColor,
    placeholderTextColor,
    fs = 12,
    labelFs = 12,
    placeholder = 'Enter Your...',
    disabled = false,
    isError,
    helperText = '',
    multiline = false,
    renderLeftIcon,
    renderRightIcon,
    inputContStyle,
    inputStyle,
    containerStyle,
    labelStyle,
    ...props
}) => {

    const theme: any = useTheme();

    const cursor = isError ? theme.colors.error : cursorColor ?? theme.colors.cursorColor;
    const placeholderColor = placeholderTextColor ?? theme.colors.placeholderColor;


    const STYLES = StyleSheet.create({
        INPUT: {
            color: disabled ? theme.colors.textDisable : isError ? theme.colors.error : textColor ?? theme.colors.textPrimary,
            fontSize: responsiveFontSize(fs),
            textAlignVertical: multiline ? 'top' : 'center',
            padding: 0
        },
        LABEL: {
            color: isError ? theme.colors.error : labelColor ?? theme.colors.textTertiary,
            fontSize: responsiveFontSize(labelFs),
            fontWeight: 'bold'
        },
        INPUT_CONT: {
            flexDirection: 'row',
            alignItems: multiline ? 'flex-start' : 'center',
            borderColor: isError ? theme.colors.error : strokeColor ?? theme.colors.outline,
            // height: multiline ? 'auto' : verticalScale(42),
            // paddingVertical: verticalScale(6),
            height: multiline ? 'auto' : verticalScale(38),
            // paddingVertical: multiline ? 'auto' : verticalScale(7),
            backgroundColor: disabled ? theme.colors.disable : bg ?? 'transparent',
            borderWidth: variant === 'standard' ? 0 : stroke,
            borderBottomWidth: stroke,
            paddingHorizontal: horizontalScale(15),
            // paddingVertical: multiline ? verticalScale(10) : 0,
            borderRadius: verticalScale(br),
            gap: horizontalScale(15),
        },
        ERROR_HELPER_TEXT: {
            color: theme.colors.error,
            fontSize: responsiveFontSize(10),
            paddingHorizontal: 5
        }
    });

    return (<>
        <StyledView gap={verticalScale(4)} style={containerStyle}>
            {
                label &&
                <View>
                    <Text style={[STYLES.LABEL, labelStyle]}>{label}</Text>
                </View>
            }
            <View
                style={[STYLES.INPUT_CONT, inputContStyle]}
            >
                {
                    renderLeftIcon
                    // renderLeftIcon && React.cloneElement(renderLeftIcon, { color: '#000', size: moderateScale(iconSize), ...renderLeftIcon?.props })
                }
                <View
                    style={{ flex: 1, alignSelf: 'center' }}
                >
                    <TextInput
                        style={[STYLES.INPUT, inputStyle]}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderColor}
                        editable={!disabled}
                        multiline={multiline}
                        cursorColor={cursor}
                        {...props}
                    />
                </View>
                {
                    renderRightIcon
                    // renderRightIcon && React.cloneElement(renderRightIcon, { color: '#000', size: moderateScale(iconSize), ...renderRightIcon?.props })
                }
            </View>
            {
                (isError && helperText) &&
                <View>
                    <Text style={STYLES.ERROR_HELPER_TEXT}>{helperText}</Text>
                </View>
            }
        </StyledView>
    </>)
}
export default UserInput;
export type { UserInputProps };

