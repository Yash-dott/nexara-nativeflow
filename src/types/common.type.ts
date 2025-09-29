import type { typographySizeTypes } from "../constants/typographySizes";

export type UserInputVariant = 'outlined' | 'standard';
export type DialogVariant = 'classic' | 'default';
export type ButtonVariant = 'outlined' | 'contained';
// export type TypographyVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'h7';
export type TypographyScale = 'xxs' | 'xs' | 'sm' | 'base' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl';
export type TypographyVariant = keyof ThemeColorTypes['typography'];
export type themeModeTypes = 'light' | 'dark';
export type scalingModeTypes = 'full' | 'partial';

export type dialogSizesTypes = {
    xs: number,
    sm: number,
    md: number,
    lg: number,
    full: number,
};

type ColorPalette = {
    natural: {
        0: string;
        50: string;
        100: string;
        200: string;
        300: string;
        400: string;
        500: string;
        600: string;
        700: string;
        800: string;
        900: string;
    }
}
type ThemeColorTypes = {

    palette: ColorPalette;

    brand: {
        primary: string;     // Main brand color (buttons, highlights)
        onPrimary: string;   // Text/icons on primary background
        secondary: string;   // Secondary brand color (accents)
        onSecondary: string; // Text/icons on secondary background
        tertiary: string;    // Optional brand accent (extra highlight)
        onTertiary: string;  // Text/icons on tertiary background
    };

    semantic: {
        success: string;   // Success indicators (green states)
        onSuccess: string; // Text/icons on success background
        warning: string;   // Warning indicators (yellow states)
        onWarning: string; // Text/icons on warning background
        danger: string;    // Error/destructive indicators (red states)
        onDanger: string;  // Text/icons on danger background
        info: string;      // Informational highlights (blue states)
        onInfo: string;    // Text/icons on info background
    };

    background: {
        default: string;   // App/page root background
        surface: string;   // Surfaces like cards, sections
        elevated: string;  // Floating UI (menus, dialogs)
        backdrop: string;  // Dimmed overlay behind modals
    };

    border: {
        subtle: string; // For dividers, separators, very low-emphasis outlines like Card dividers.
        default: string; // The “go-to” border color for most components. like Button borders, Input fields when idle, Container outlines.
        strong: string; // High-contrast, visible borders that must stand out, Modals or cards against busy backgrounds.
        focus: string; //Special border color for focus rings or interactive states, Input fields when focused.
    };

    typography: {
        primary: string;
        secondary: string;
        tertiary: string;
        disabled: string;
        inverse: string; // for text over dark backgrounds
    };

    states: {
        hover: string;
        pressed: string;
        focus: string;
        disabled: string;
    };

    elevation?: {
        level0: string; // shadow for flat
        level1: string; // small cards
        level2: string; // dialogs
        level3: string; // modals
        level4: string; // modals
    };
};

export type ThemeTypes = {
    isDark: boolean,
    colors: ThemeColorTypes;
    sizes: {
        typography: typographySizeTypes;
        dialog: dialogSizesTypes;
    };
}

export type Theme = {
    light: ThemeTypes;
    dark: ThemeTypes;
};
