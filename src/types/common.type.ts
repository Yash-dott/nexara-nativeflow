import type { typographySizeTypes } from "../constants/typographySizes";

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
