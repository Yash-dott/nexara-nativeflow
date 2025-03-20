import React from 'react';
import { Text } from 'react-native';
import type { TextProps, TextStyle, ColorValue, StyleProp } from "react-native";
import { responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
// import { typographySizes } from '../../constants';
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
    ...props
}) => {

    const { colors, typography: { variantSizes } }: any = useTheme();

    return (<>
        <Text
            allowFontScaling={false}
            style={[{
                fontSize: responsiveFontSize(fs ?? variantSizes[variant]),
                fontFamily: ff ?? '',
                textAlign: tas ? 'center' : 'auto',
                fontWeight: fw ?? 'normal',
                color: color ?? (themeColor && colors.primary || primary && colors.textPrimary || secondary && colors.textSecondary || colors.textTertiary),
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