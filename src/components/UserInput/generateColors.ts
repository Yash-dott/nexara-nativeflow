import type { ThemeTypes } from "../../types";


const generateColors = (theme: ThemeTypes, isError: boolean, cursorColor?: string, placeholderColor?: string, labelColor?: string) => {
    const computedCursorColor = isError ? theme.colors.semantic.danger : (cursorColor ?? theme.colors.brand.primary);
    const computedPlaceholderColor = placeholderColor ?? theme.colors.typography.tertiary;
    const computedLabelColor = isError ? theme.colors.semantic.danger : labelColor ?? theme.colors.typography.primary;
    return {
        computedCursorColor,
        computedPlaceholderColor,
        computedLabelColor
    }
}
export default generateColors;