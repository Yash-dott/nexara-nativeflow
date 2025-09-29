import Color from "color";
import type { ThemeTypes } from "../../types";

const getBorderColor = ({
    theme,
    strokeColor,
    disabled,
    active
}: {
    theme: ThemeTypes;
    strokeColor: string | undefined;
    disabled: boolean;
    active: boolean;
}) => {
    if (disabled) {
        return theme.colors.border.strong;
    } else if (strokeColor) {
        return strokeColor
    } else if (active) {
        return Color(theme.colors.brand.primary).alpha(0.3).rgb().toString();
    }
    return theme.colors.border.default;
};


const getTextColor = ({
    theme,
    labelColor,
    disabled
}: {
    theme: ThemeTypes;
    labelColor: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.typography.disabled;
    }
    else if (labelColor) {
        return labelColor;
    }
    return theme.colors.typography.secondary;
};

const getBgColor = ({
    theme,
    bg,
    disabled,
    active
}: {
    theme: ThemeTypes;
    bg: string | undefined;
    disabled: boolean;
    active: boolean;
}) => {
    if (disabled) {
        return theme.colors.states.disabled;
    } else if (bg) {
        return bg
    } else if (active) {
        return Color(theme.colors.brand.primary).alpha(0.1).rgb().toString();
    }
    return 'transparent'
    // return theme.colors.background.default
    // return Color(theme.colors.brand.primary).alpha(0.2).rgb().toString();
    // return Color(theme.colors.brand.primary).alpha(0.1).rgb().toString();
};

const getChipColors = ({
    theme,
    bg,
    labelColor,
    strokeColor,
    disabled,
    active
}: {
    theme: ThemeTypes;
    bg: string | undefined;
    labelColor: string | undefined;
    strokeColor: string | undefined;
    disabled: boolean;
    active: boolean;
}) => {


    const backgroundColor = getBgColor({
        theme,
        bg,
        disabled,
        active
    });
    const buttonTextColor = getTextColor({
        theme,
        labelColor,
        disabled
    });
    const buttonBorderColor = getBorderColor({
        theme,
        strokeColor,
        disabled,
        active
    });

    return {
        backgroundColor,
        buttonTextColor,
        buttonBorderColor
    }
};

export { getChipColors };