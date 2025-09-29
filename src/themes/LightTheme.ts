import Color from "color";
import { dialogSizes, typographySizes } from "../constants";
import type { ThemeTypes } from "../types";

const colorPalette = {
    natural: {
        0: "#FFFFFF",   // pure white
        50: "#F9FAFB",  // very light gray (default page background)
        100: "#F3F4F6", // light gray (elevated surfaces)
        200: "#E5E7EB", // subtle borders, dividers
        300: "#D1D5DB", // default borders, secondary text
        400: "#9CA3AF", // strong borders, muted text
        500: "#6B7280", // tertiary text
        600: "#4B5563", // secondary text
        700: "#374151", // primary text on light backgrounds
        800: "#1F2937", // strong primary text
        900: "#111827", // almost black
    }
}

const LightTheme: ThemeTypes = {
    isDark: false,
    colors: {
        palette: colorPalette,
        brand: {
            primary: "#034C53",
            onPrimary: "#FFFFFF",
            secondary: "#6366F1",
            onSecondary: "#FFFFFF",
            tertiary: "#F59E0B",
            onTertiary: "#111827",
        },
        semantic: {
            success: "#22C55E",
            onSuccess: "#FFFFFF",
            warning: "#FACC15",
            onWarning: "#111827",
            danger: "#EF4444",
            onDanger: "#FFFFFF",
            info: "#3B82F6",
            onInfo: "#FFFFFF",
        },
        background: {
            default: "#F9FAFB",
            // default: "#FFFFFF",
            surface: "#FFFFFF",
            // elevated: "#F3F4F6",
            // elevated: "#FAFAFA",
            elevated: "#FFFFFF",
            backdrop: "rgba(0,0,0,0.4)",
        },
        border: {
            subtle: "#E5E7EB",
            default: "#D1D5DB",
            // default: colorPalette.natural[300],
            strong: "#9CA3AF",
            focus: "#F97316",
        },
        typography: {
            primary: "#1A1A1A",
            secondary: "#4D4D4D",
            tertiary: "#808080",
            // disabled: "#B3B3B3",
            disabled: "#808080",
            inverse: "#FFFFFF"
        },
        states: {
            hover: "rgba(0, 0, 0, 0.04)",
            pressed: "rgba(0, 0, 0, 0.08)",
            focus: '',
            // disabled: "rgba(0, 0, 0, 0.26)"
            disabled: "rgb(184, 184, 184)"
        },
        elevation: {
            level0: "none",
            level1: "0px 1px 3px rgba(0,0,0,0.2), 0px 1px 1px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)",
            level2: "0px 2px 4px rgba(0,0,0,0.12), 0px 2px 3px rgba(0,0,0,0.18)",
            level3: "0px 4px 6px rgba(0,0,0,0.15), 0px 2px 4px rgba(0,0,0,0.12)",
            level4: "0px 8px 12px rgba(0,0,0,0.16), 0px 4px 8px rgba(0,0,0,0.12)"
        }
    },
    sizes: {
        typography: typographySizes,
        dialog: dialogSizes
    }
}
LightTheme.colors.states.focus = Color(LightTheme.colors.brand.primary).mix(Color("white"), 0.8).alpha(0.3).rgb().string();

export default LightTheme;