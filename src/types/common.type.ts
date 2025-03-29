import type { typographySizeTypes } from "../constants/typographySizes";

export type UserInputVariant = 'outlined' | 'standard';
export type DialogVariant = 'classic' | 'default';
export type ButtonVariant = 'outlined' | 'contained';
export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
export type themeModeTypes = 'light' | 'dark';

export type dialogSizesTypes = {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    full: number,
};

type ThemeColorTypes = {
    primary: string;
    secondary: string;
    outline: string;
    disable: string;
    textPrimary: string;
    textSecondary: string;
    textTertiary: string;
    textDisable: string;
    cursorColor: string;
    placeholderColor: string;
    iconPrimary: string;
    iconSecondary: string;
    iconDisable: string;
    dividerColor: string;
    switchColor: string;
    inputBgColor: string;
    chipBgColor: string;
    error: string;
}

export type ThemeTypes = {
    isDark: boolean,
    colors: ThemeColorTypes;
    typography: {
        variantSizes: typographySizeTypes;
    };
    dialogSizes: dialogSizesTypes;
}

export type Theme = {
    light: ThemeTypes;
    dark: ThemeTypes;
};
