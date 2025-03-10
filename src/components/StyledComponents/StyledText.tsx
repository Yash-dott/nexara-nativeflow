import React from 'react';
import { Text } from 'react-native';
import type { TextProps, TextStyle, ColorValue, StyleProp } from "react-native";
import { responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import { typographySizes } from '../../constants';
import type { FontWeight, TypographyVariant } from '../../types/styledTextTypes';


type StyledTextProps = TextProps & {
    variant?: TypographyVariant;
    children?: React.ReactNode;
    style?: StyleProp<TextStyle>;
    ff?: string;
    fs?: number;
    fw?: FontWeight;
    tas?: boolean;
    color?: ColorValue;
    themeColor?: boolean;
    primary?: boolean;
    secondary?: boolean;
}

const StyledText: React.FC<StyledTextProps> = ({
    variant = 'h6',
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
    ...props
}) => {

    const theme: any = useTheme();

    return (<>
        <Text
            style={[{
                fontSize: responsiveFontSize(fs ?? typographySizes[variant]),
                fontFamily: ff ?? '',
                textAlign: tas ? 'center' : 'auto',
                fontWeight: fw ?? 'normal',
                color: color ?? (themeColor && theme.colors.primary || primary && theme.colors.textPrimary || secondary && theme.colors.textSecondary || theme.colors.textTertiary),
            },
                style,
            ]}
            {...props}
        >
            {children}
        </Text>
    </>);
};

export default StyledText;
export type { StyledTextProps };