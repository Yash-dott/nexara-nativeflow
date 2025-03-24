import React from 'react';
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { StyledText, StyledView } from '../StyledComponents';
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from '../../hooks';
import { getChipColors } from './utils';
import type { ChipProps } from '../../types';

const Chip: React.FC<ChipProps> = ({
    variant = 'contained',
    type = 'round',
    title = 'Chip',
    bg,
    titleColor,
    fs,
    stroke = 0.9,
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

    const { buttonTextColor, buttonBorderColor } = getChipColors({
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
            // backgroundColor: backgroundColor,
            backgroundColor: '#F9FAFB',
            // borderRadius: moderateScale(type === 'round' ? 20 : 7),
            borderRadius: verticalScale(7),
            paddingVertical: verticalScale(9),
            paddingHorizontal: horizontalScale(16),
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
                    <StyledText primary variant='h5' fs={fs} style={[STYLES.TEXT, textStyle]}>{title}</StyledText>
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