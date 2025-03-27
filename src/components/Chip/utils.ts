import type { ThemeTypes } from "../../types";

const getBorderColor = ({
    theme,
    strokeColor,
    disabled,
}: {
    theme: ThemeTypes;
    strokeColor: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.disable;
    }
    if (strokeColor) {
        return strokeColor
    }
    return theme.colors.outline;
};


const getTextColor = ({
    theme,
    titleColor,
    disabled
}: {
    theme: ThemeTypes;
    titleColor: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.textDisable;
    }
    else if (titleColor) {
        return titleColor;
    }
    return theme.colors.textTertiary;
};

const getBgColor = ({
    theme,
    bg,
    disabled
}: {
    theme: ThemeTypes;
    bg: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.disable;
    }
    else if (bg) {
        return bg
    }
    return theme.colors.chipBgColor;
};

const getChipColors = ({
    theme,
    bg,
    titleColor,
    strokeColor,
    disabled
}: {
    theme: ThemeTypes;
    bg: string | undefined;
    titleColor: string | undefined;
    strokeColor: string | undefined;
    disabled: boolean;
}) => {


    const backgroundColor = getBgColor({
        theme,
        bg,
        disabled
    });
    const buttonTextColor = getTextColor({
        theme,
        titleColor,
        disabled
    });
    const buttonBorderColor = getBorderColor({
        theme,
        strokeColor,
        disabled,
    });

    return {
        backgroundColor,
        buttonTextColor,
        buttonBorderColor
    }
};

export { getChipColors };