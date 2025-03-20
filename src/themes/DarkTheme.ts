import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "./ThemeTypes";


const DarkTheme: ThemeTypes = {
    isDark: true,
    colors: {
        primary: '#ffffff',
        secondary: '#000000',
        // tertiary: '#8080805e',
        disable: '#8080805e',
        outline: '#8080805e',
        textPrimary: '#ffffff',
        textSecondary: '#000000',
        textTertiary: 'gray',
        textDisable: '#808080',
        cursorColor: '#ffffff',
        placeholderColor: '#808080',


        iconPrimary: '#E0E0E0',
        iconSecondary: '#000000',
        iconDisable: '#808080',

        dividerColor: "#DCDBDB",

        switchColor: '#ffffff',
        error: '#ED2939'
    },
    typography: {
        variantSizes: typographySizes
    },
    // screenBreakpoints: BreakPoints,
    dialogSizes,
}

export default DarkTheme;