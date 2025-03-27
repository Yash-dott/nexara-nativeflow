import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "../types";


const DarkTheme: ThemeTypes = {
    isDark: true,
    colors: {
        primary: '#ffffff',
        secondary: '#000000',
        disable: 'rgba(180, 180, 180, 0.20)',
        // outline: '#8080805e',
        outline: '#9090905e',
        textPrimary: '#ffffff',
        textSecondary: '#000000',
        // textTertiary: 'gray',
        textTertiary: '#A0A0A0',
        textDisable: '#808080',
        cursorColor: '#ffffff',
        placeholderColor: '#808080',


        iconPrimary: '#E0E0E0',
        iconSecondary: '#000000',
        iconDisable: '#808080',

        dividerColor: "#3A3A3A",
        inputBgColor: 'transparent',
        chipBgColor: 'transparent',

        switchColor: '#ffffff',
        error: '#ED2939'
    },
    typography: {
        variantSizes: typographySizes
    },
    dialogSizes,
}

export default DarkTheme;