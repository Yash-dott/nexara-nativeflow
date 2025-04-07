import React, { type JSX } from 'react';
import { StyleSheet, View } from 'react-native';
import type { TextInputProps, ViewStyle, TextStyle } from "react-native";
import { responsiveFontSize, verticalScale, horizontalScale } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import { StyledText } from '../StyledComponents';


type UserInputV2Props = TextInputProps & {
    variant?: 'outlined' | 'standard' | 'filled';
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
    isDisabled?: boolean;
    multiline?: boolean;
    renderLeftIcon?: () => JSX.Element;
    renderRightIcon?: () => JSX.Element;
    inputContStyle?: ViewStyle | ViewStyle[];
    inputStyle?: TextStyle | TextStyle[];
    containerStyle?: ViewStyle | ViewStyle[];
    labelStyle?: TextStyle | TextStyle[];
}


const UserInputV2: React.FC<UserInputV2Props> = ({
    variant = 'outlined',
    // label,
    bg = 'transparent',
    br = 5,
    stroke = 1,
    labelColor,
    textColor,
    strokeColor,
    // cursorColor,
    // placeholderTextColor,
    fs = 12,
    labelFs = 12,
    // placeholder = 'Enter Your...',
    isDisabled = false,
    isError,
    multiline = false,
    renderLeftIcon,
    renderRightIcon,
    inputContStyle,
    // inputStyle,
    containerStyle,
    // labelStyle,/
}) => {

    const theme: any = useTheme();

    // const cursor = isError ? theme.colors.error : cursorColor ?? theme.colors.cursorColor;
    // const placeholderColor = placeholderTextColor ?? theme.colors.placeholderColor

    const STYLES = StyleSheet.create({
        INPUT: {
            color: isDisabled ? theme.colors.textDisable : isError ? theme.colors.error : textColor ?? theme.colors.textPrimary,
            fontSize: responsiveFontSize(fs),
            textAlignVertical: multiline ? 'top' : 'center',
            padding: 0
        },
        LABEL: {
            color: isError ? theme.colors.error : labelColor ?? theme.colors.textPrimary,
            fontSize: responsiveFontSize(labelFs),
            fontWeight: 'bold'
        },
        INPUT_CONT: {
            flexDirection: 'row',
            alignItems: multiline ? 'flex-start' : 'center',
            borderColor: isError ? theme.colors.error : strokeColor ?? theme.colors.outline,
            height: multiline ? 'auto' : verticalScale(45),
            backgroundColor: isDisabled ? theme.colors.disable : bg ?? 'transparent',
            borderWidth: variant === 'standard' ? 0 : stroke,
            borderBottomWidth: stroke,
            paddingHorizontal: horizontalScale(15),
            paddingVertical: multiline ? verticalScale(10) : 0,
            borderRadius: verticalScale(br),
            gap: horizontalScale(15),
        },
    });
    const viewProps = {
        gap: verticalScale(4),
        ...containerStyle
    };
    return (<>
        <View {...viewProps}>
            {/* {
                label &&
                <View>
                    <Text style={{ ...STYLES.LABEL, ...labelStyle }}>{label}</Text>
                </View>
            } */}
            <View
                style={{ ...STYLES.INPUT_CONT, ...inputContStyle }}
            >
                {
                    renderLeftIcon && renderLeftIcon()
                }
                <View
                    style={{ flex: 1, alignSelf: 'center' }}
                >
                    {/* <TextInput
                        style={{ ...STYLES.INPUT, ...inputStyle }}
                        placeholder={placeholder}
                        placeholderTextColor={placeholderColor}
                        editable={!isDisabled}
                        multiline={multiline}
                        cursorColor={cursor}
                        {...rest}
                    /> */}
                    <StyledText>Email</StyledText>
                </View>
                {
                    renderRightIcon && renderRightIcon()
                }
            </View>
        </View>
    </>)
}
export default UserInputV2;
export type { UserInputV2Props };

