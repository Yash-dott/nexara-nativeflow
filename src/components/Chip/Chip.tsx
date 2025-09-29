import React, { type FC } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { StyledText, StyledView } from '../StyledComponents';
import { horizontalScale, verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from '../../hooks';
import { getChipColors } from './utils';
import type { ChipProps } from '../../types';

const Chip: FC<ChipProps> = ({
    label = 'Chip',
    labelColor,
    fs,
    fScale = 'sm',
    ff,
    bg,
    br = 7,
    gap = 7,
    paddingV = 6,
    paddingH = 15,
    stroke = 0.8,
    strokeColor,
    rippleColor,
    disabled = false,
    renderLeftIcon,
    renderRightIcon,
    containerStyle,
    textStyle,
    active = false,
    ...rest
}) => {

    const theme: any = useTheme();

    const { buttonTextColor, buttonBorderColor, backgroundColor } = getChipColors({
        theme,
        bg,
        labelColor,
        strokeColor,
        disabled,
        active
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
            paddingLeft: horizontalScale((renderLeftIcon && paddingH / 2) ?? paddingH),
            paddingRight: horizontalScale((renderRightIcon && paddingH / 2) ?? paddingH),
            gap: horizontalScale(gap)
        },
        TEXT: {
            color: buttonTextColor,
        }
    });
    return (<>
        <StyledView alignSelf='flex-start'>
            <TouchableOpacity
                disabled={disabled}
                {...rest}
            >
                <StyledView style={[STYLES.CONTAINER, containerStyle]}>
                    {
                        React.isValidElement(renderLeftIcon) && renderLeftIcon
                    }
                    <StyledText fScale={fScale} ff={ff} fs={fs} style={[STYLES.TEXT, textStyle]}>{label}</StyledText>
                    {
                        React.isValidElement(renderRightIcon) && renderRightIcon
                    }
                </StyledView>

            </TouchableOpacity>
        </StyledView>
    </>);
}
export default Chip;
export type { ChipProps };

