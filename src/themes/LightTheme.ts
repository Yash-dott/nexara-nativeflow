import Color from "color";
import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "../types";

// const base = Color(theme.colors.primary);

// const createTheme = (theme: { primary: string; secondary: string }) => {
//     return {
//         isDark: false,
//         colors: {
//             ...theme,
//             outline: '#8080805e',
//             disable: Color(theme.primary).mix(Color("white"), 0.4).hex(),

//             textPrimary: '#000000',
//             textSecondary: '#ffffff',
//             textTertiary: 'gray',
//             textDisable: '#9E9E9E',
//             cursorColor: '#000000',
//             placeholderColor: '#808080',

//             iconPrimary: '#000000',
//             iconSecondary: '#E0E0E0',
//             iconDisable: '#9E9E9E',

//             dividerColor: "#DCDBDB",

//             switchColor: '#353935',
//             error: '#ED2939',
//         },
//         typography: {
//             variantSizes: typographySizes
//         },
//         // screenBreakpoints: BreakPoints,
//         dialogSizes
//     }
// }

// const LightTheme = createTheme({
//     primary: '#000000',
//     secondary: '#ffffff',
//     textPrimary: '#000000',

//     textSecondary: '#ffffff',
//     textTertiary: 'gray',
//     textDisable: '#9E9E9E',
//     cursorColor: '#000000',
//     placeholderColor: '#808080',

//     iconPrimary: '#000000',
//     iconSecondary: '#E0E0E0',
//     iconDisable: '#9E9E9E',

//     dividerColor: "#DCDBDB",

//     switchColor: '#353935',
//     error: '#ED2939',
// })

const LightTheme: ThemeTypes = {
    isDark: false,
    colors: {
        primary: '#000000',
        secondary: '#ffffff',
        // tertiary: '#8080805e',
        outline: '#8080805e',
        // disable: '#E0E0E0',
        disable: Color('rgba(0, 0, 0, 1)').alpha(0.12).rgb().string(),

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
    dialogSizes
}

export default LightTheme;