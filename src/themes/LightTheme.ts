import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "./ThemeTypes";

const LightTheme: ThemeTypes = {
    isDark: false,
    colors: {
        primary: '#000000',
        secondary: '#ffffff',
        // tertiary: '#8080805e',
        outline: '#8080805e',
        disable: '#E0E0E0',

        textPrimary: '#000000',
        textSecondary: '#ffffff',
        textTertiary: 'gray',
        textDisable: '#9E9E9E',
        cursorColor: '#000000',
        placeholderColor: '#808080',

        iconPrimary: '#000000',
        iconSecondary: '#E0E0E0',
        iconDisable: '#9E9E9E',

        dividerColor: "#DCDBDB",

        switchColor: '#353935',
        error: '#ED2939',
    },
    typography: {
        variantSizes: typographySizes
    },
    // screenBreakpoints: BreakPoints,
    dialogSizes

}

export default LightTheme;