import Color from "color";
import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "../types";

const darkColorPalette = {
    natural: {
        0: "#000000",   // pure black
        50: "#0D1117",  // GitHub-inspired dark background
        100: "#161B22", // elevated surfaces
        200: "#21262D", // card backgrounds
        300: "#30363D", // borders and dividers
        400: "#484F58", // muted elements
        500: "#6E7681", // tertiary text
        600: "#8B949E", // secondary text
        700: "#C9D1D9", // primary text
        800: "#F0F6FC", // high contrast text
        900: "#FFFFFF", // pure white
    }
};

// Option 1: Purple & Emerald (Elegant & Professional)
const DarkTheme: ThemeTypes = {
    isDark: true,
    colors: {
        palette: darkColorPalette,
        brand: {
            primary: "#8B5CF6",        // Rich violet - elegant and professional
            onPrimary: "#FFFFFF",
            secondary: "#10B981",      // Emerald green - fresh and modern  
            onSecondary: "#FFFFFF",
            tertiary: "#F59E0B",       // Amber - warm and inviting
            onTertiary: "#000000",
        },
        semantic: {
            success: "#34D399",        // Bright emerald success
            onSuccess: "#000000",
            warning: "#FBBF24",        // Warm amber warning
            onWarning: "#000000",
            danger: "#F87171",         // Soft red - less harsh than bright red
            onDanger: "#000000",
            info: "#60A5FA",           // Sky blue info
            onInfo: "#000000",
        },
        background: {
            default: "#0D1117",        // Deep professional background
            surface: "#161B22",        // Card surfaces
            elevated: "#21262D",       // Modal and elevated components
            backdrop: "rgba(13,17,23,0.8)",
        },
        border: {
            subtle: "#21262D",
            default: "#30363D",
            strong: "#484F58",
            focus: "#8B5CF6",          // Primary violet focus
        },
        typography: {
            primary: "#F0F6FC",        // Crisp white text
            secondary: "#C9D1D9",      // Soft gray text
            tertiary: "#8B949E",       // Muted text
            disabled: "#484F58",
            inverse: "#0D1117"
        },
        states: {
            hover: "rgba(139, 92, 246, 0.1)",      // Subtle violet hover
            pressed: "rgba(139, 92, 246, 0.2)",    // Stronger violet press
            focus: '',
            disabled: "rgba(72, 79, 88, 0.6)"
        },
        elevation: {
            level0: "none",
            level1: "0px 2px 4px rgba(0,0,0,0.55), 0px 1px 2px rgba(139,92,246,0.08)",
            level2: "0px 4px 8px rgba(0,0,0,0.65), 0px 2px 4px rgba(139,92,246,0.07)",
            level3: "0px 8px 16px rgba(0,0,0,0.75), 0px 4px 8px rgba(139,92,246,0.05)",
            level4: "0px 16px 32px rgba(0,0,0,0.85), 0px 8px 16px rgba(139,92,246,0.03)",
        }
    },
    sizes: {
        typography: typographySizes,
        dialog: dialogSizes
    }
};

DarkTheme.colors.states.focus = Color(DarkTheme.colors.brand.primary)
    .alpha(0.05)
    .rgb()
    .string();


export default DarkTheme;
// import Color from "color";
// import { dialogSizes, typographySizes } from "../constants";
// import type { ThemeTypes } from "../types";

// const colorPalette = {
//     natural: {
//        0: "#FFFFFF",   // pure white
//         50: "#F9FAFB",  // very light gray (default page background)
//         100: "#F3F4F6", // light gray (elevated surfaces)
//         200: "#E5E7EB", // subtle borders, dividers
//         300: "#D1D5DB", // default borders, secondary text
//         400: "#9CA3AF", // strong borders, muted text
//         500: "#6B7280", // tertiary text
//         600: "#4B5563", // secondary text
//         700: "#374151", // primary text on light backgrounds
//         800: "#1F2937", // strong primary text
//         900: "#111827", // almost black
//     }
// }

// const DarkTheme: ThemeTypes = {
//     isDark: true,
//     colors: {
//         palette: colorPalette,
//         brand: {
//             primary: "#22D3EE",      // teal accent
//             onPrimary: "#111827",
//             secondary: "#818CF8",    // indigo
//             onSecondary: "#111827",
//             tertiary: "#F59E0B",     // amber
//             onTertiary: "#111827",
//         },
//         semantic: {
//             success: "#22C55E",
//             onSuccess: "#111827",
//             warning: "#FACC15",
//             onWarning: "#111827",
//             danger: "#EF4444",
//             onDanger: "#FFFFFF",
//             info: "#3B82F6",
//             onInfo: "#FFFFFF",
//         },
//         background: {
//             default: "#111827",  // app background
//             surface: "#1F2937",  // cards, sections
//             elevated: "#272B33", // menus, dialogs
//             backdrop: "rgba(0,0,0,0.6)", // darker scrim
//         },
//         border: {
//             subtle: "#272B33",
//             default: "#374151",
//             strong: "#4B5563",
//             focus: "#22D3EE", // brand primary
//         },
//         typography: {
//             primary: "#F9FAFB",   // main text
//             secondary: "#D1D5DB", // muted text
//             tertiary: "#9CA3AF",  // tertiary text
//             disabled: "#808892",  // disabled gray
//             inverse: "#111827",   // inverse on bright backgrounds
//         },
//         states: {
//             hover: "rgba(255, 255, 255, 0.04)",
//             pressed: "rgba(255, 255, 255, 0.08)",
//             focus: "",
//             active: "",
//             disabled: "rgba(255, 255, 255, 0.3)"
//         },
//         elevation: {
//             level0: "none",
//             level1: "0px 1px 3px rgba(0,0,0,0.4), 0px 1px 1px rgba(0,0,0,0.24), 0px 2px 1px -1px rgba(0,0,0,0.2)",
//             level2: "0px 2px 4px rgba(0,0,0,0.36), 0px 2px 3px rgba(0,0,0,0.32)",
//             level4: "0px 4px 6px rgba(0,0,0,0.3), 0px 2px 4px rgba(0,0,0,0.28)",
//             level8: "0px 8px 12px rgba(0,0,0,0.28), 0px 4px 8px rgba(0,0,0,0.24)",
//             level12: "0px 12px 17px rgba(0,0,0,0.26), 0px 5px 12px rgba(0,0,0,0.22)",
//             level16: "0px 16px 24px rgba(0,0,0,0.25), 0px 6px 16px rgba(0,0,0,0.2)",
//             level24: "0px 24px 38px rgba(0,0,0,0.24), 0px 9px 46px rgba(0,0,0,0.18)",
//         }
//     },
//     sizes: {
//         typography: typographySizes,
//         dialog: dialogSizes
//     }
// };

// DarkTheme.colors.states.focus = Color(DarkTheme.colors.brand.primary).mix(Color("white"), 0.8).alpha(0.1).rgb().string();
// DarkTheme.colors.states.active = Color(DarkTheme.colors.brand.primary).lighten(0).alpha(0.3).rgb().string();

// export default DarkTheme;