import type { ThemeTypes } from "../../types";


const generateColors = (theme: ThemeTypes, isError: boolean, cursorColor?: string, placeholderColor?: string, labelColor?: string) => {
    const computedCursorColor = isError ? theme.colors.error : (cursorColor ?? theme.colors.cursorColor);
    const computedPlaceholderColor = placeholderColor ?? theme.colors.placeholderColor;
    const computedLabelColor = isError ? theme.colors.error : labelColor ?? theme.colors.textTertiary;
    return {
        computedCursorColor,
        computedPlaceholderColor,
        computedLabelColor
    }
}
export default generateColors;