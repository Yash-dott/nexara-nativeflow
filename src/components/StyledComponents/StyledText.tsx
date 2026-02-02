import { type FC } from 'react';
import { Text } from 'react-native';
import { responsiveFontSize } from '../../helpers/ResponsiveCalculations';
import { useTheme } from '../../hooks';
import type { StyledTextProps } from '../../types';

const StyledText: FC<StyledTextProps> = ({
    variant = 'primary',
    fScale = 'base',
    children,
    style,
    ff,
    fs,
    tas,
    fw,
    color,
    themeColor,
    ...rest
}) => {
    const { colors, sizes: { typography: typographyScales } }: any = useTheme();

    const getVariantColor = () => {
        switch (variant) {
            case 'secondary': return colors.typography.secondary;
            case 'tertiary': return colors.typography.tertiary;
            case 'disabled': return colors.typography.disabled;
            case 'inverse': return colors.typography.inverse;
            default: return colors.typography.primary;
        }
    };
    return (
        <Text
            style={[{
                fontSize: responsiveFontSize(fs ?? typographyScales[fScale]),
                fontFamily: ff ?? '',
                textAlign: tas ? 'center' : 'auto',
                ...(fw ? { fontWeight: fw } : {}),
                color: color ?? (themeColor && colors.brand.primary || getVariantColor()),
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