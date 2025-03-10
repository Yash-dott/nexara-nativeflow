import React from 'react';
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import type { StyleProp, ViewStyle, TextStyle, PressableProps } from "react-native";
import { StyledText, StyledView } from '../StyledComponents';
import { horizontalScale, moderateScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from '../../hooks';
import { getChipColors } from './utils';
import type { ChipVariant } from "./utils";


type ChipProps = PressableProps & {
    variant?: ChipVariant;
    type?: 'round' | 'flat';
    title?: string;
    bg?: string;
    titleColor?: string;
    fs?: number;
    stroke?: number;
    color?: string;
    rippleColor?: string;
    disabled?: boolean;
    strokeColor?: string;
    renderLeftIcon?: JSX.Element;
    renderRightIcon?: JSX.Element;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const Chip: React.FC<ChipProps> = ({
    variant = 'contained',
    type = 'round',
    title = 'Chip',
    bg,
    titleColor,
    fs,
    stroke = 0.7,
    strokeColor,
    color,
    rippleColor,
    disabled = false,
    renderLeftIcon,
    renderRightIcon,
    containerStyle,
    textStyle,
    ...props
}) => {

    const theme: any = useTheme();

    const { backgroundColor, buttonTextColor, buttonBorderColor } = getChipColors({
        theme,
        variant,
        bg,
        titleColor,
        strokeColor,
        color,
        disabled
    });


    const STYLES = StyleSheet.create({
        CONTAINER: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: stroke,
            borderColor: buttonBorderColor,
            backgroundColor: backgroundColor,
            borderRadius: moderateScale(type === 'round' ? 20 : 7),
            paddingVertical: verticalScale(8),
            paddingHorizontal: horizontalScale(12),
            gap: horizontalScale(6)
        },
        TEXT: {
            color: buttonTextColor,
        }
    });
    return (<>
        <StyledView alignSelf='flex-start'>
            <Pressable
                android_ripple={{
                    color: rippleColor,
                }}
                {...props}
                disabled={disabled}
            >
                <StyledView style={[STYLES.CONTAINER, containerStyle]}>
                    {
                        renderLeftIcon &&
                        <TouchableOpacity
                            disabled={disabled}
                        >
                            {renderLeftIcon}
                        </TouchableOpacity>
                    }
                    <StyledText primary tas variant='h7' fs={fs} style={[STYLES.TEXT, textStyle]}>{title}</StyledText>
                    {
                        renderRightIcon &&
                        <TouchableOpacity
                            disabled={disabled}
                        >
                            {renderRightIcon}
                        </TouchableOpacity>
                    }
                </StyledView>

            </Pressable>
        </StyledView>
    </>);
}
export default Chip;
export type { ChipProps };