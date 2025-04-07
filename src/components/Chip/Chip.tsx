import React from 'react';
import { StyleSheet, Pressable, TouchableOpacity } from 'react-native';
import { StyledText, StyledView } from '../StyledComponents';
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from '../../hooks';
import { getChipColors } from './utils';
import type { ChipProps } from '../../types';

const Chip: React.FC<ChipProps> = ({
    title = 'Chip',
    bg,
    titleColor,
    fs,
    br = 7,
    gap = 7,
    paddingV = 9,
    paddingH = 13,
    stroke = 0.9,
    strokeColor,
    rippleColor,
    disabled = false,
    renderLeftIcon,
    renderRightIcon,
    containerStyle,
    textStyle,
    ...rest
}) => {

    const theme: any = useTheme();

    const { buttonTextColor, buttonBorderColor, backgroundColor } = getChipColors({
        theme,
        bg,
        titleColor,
        strokeColor,
        disabled
    });

    const STYLES = StyleSheet.create({
        CONTAINER: {
            flexDirection: 'row',
            alignItems: 'center',
            borderWidth: stroke,
            borderColor: buttonBorderColor,
            backgroundColor: backgroundColor,
            borderRadius: verticalScale(br),
            paddingVertical: verticalScale(paddingV),
            paddingHorizontal: horizontalScale(paddingH),
            gap: horizontalScale(gap)
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
                {...rest}
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