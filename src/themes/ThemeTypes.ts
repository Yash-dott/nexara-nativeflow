// import type { BreakPointsType } from "../constants/breakPoints";
import type { dialogSizesTypes } from "../constants/dialogSizes";
import type { typographySizeTypes } from "../constants/typographySizes";

type ThemeTypes = {
    isDark: boolean,
    colors: {
        primary: string;
        secondary: string;
        // tertiary: string;
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
    };
    typography: {
        variantSizes: typographySizeTypes;
    };
    // screenBreakpoints: BreakPointsType,
    dialogSizes: dialogSizesTypes;
}

export type { ThemeTypes };