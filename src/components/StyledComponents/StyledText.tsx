import React from 'react';
import { Text } from 'react-native';
import { responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import type { StyledTextProps } from '../../types';

const StyledText: React.FC<StyledTextProps> = ({
    variant = 'h5',
    children,
    style,
    ff,
    fs,
    tas,
    fw,
    color,
    themeColor,
    primary,
    secondary,
    ...rest
}) => {
    const { colors, typography: { variantSizes } }: any = useTheme();
    return (
        <Text
            style={[{
                fontSize: responsiveFontSize(fs ?? variantSizes[variant]),
                fontFamily: ff ?? '',
                textAlign: tas ? 'center' : 'auto',
                fontWeight: fw ?? 'normal',
                color: color ?? (themeColor && colors.primary || primary && colors.textPrimary || secondary && colors.textSecondary || colors.textTertiary),
            },
                style,
            ]}
            {...rest}
        >
            {children}
        </Text>
    );
};

export default StyledText;
export type { StyledTextProps };