import type { ChipVariant, ThemeTypes } from "../../types";

const getBorderColor = ({
    theme,
    strokeColor,
    disabled,
    color,
    checkVariant
}: {
    theme: ThemeTypes;
    strokeColor: string | undefined;
    disabled: boolean;
    color: string | undefined;
    checkVariant: (variant: ChipVariant) => boolean;
}) => {
    if (disabled) {
        return theme.colors.disable;
    }
    if (strokeColor) {
        return strokeColor
    }
    if (color && checkVariant('outlined')) {
        return color
    }
    
    return theme.colors.outline;
};


const getTextColor = ({
    theme,
    checkVariant,
    titleColor,
    color,
    disabled
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ChipVariant) => boolean;
    titleColor: string | undefined;
    color: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.textDisable;
    }
    else if (titleColor) {
        return titleColor;
    }
    else if (checkVariant('outlined')) {
        return color ?? 'gray'
    }
    return theme.colors.textTertiary;
};

const getBgColor = ({
    theme,
    checkVariant,
    bg,
    disabled
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ChipVariant) => boolean;
    bg: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.disable;
    }
    else if (bg) {
        return bg
    }
    else if (checkVariant('contained')) {
        return theme.colors.secondary;
    }
    else if (checkVariant('outlined')) {
        return 'transparent';
    }
    return theme.colors.primary;
};

const getChipColors = ({
    theme,
    variant,
    bg,
    titleColor,
    strokeColor,
    color,
    disabled
}: {
    theme: ThemeTypes;
    variant: ChipVariant;
    bg: string | undefined;
    titleColor: string | undefined;
    strokeColor: string | undefined;
    color: string | undefined;
    disabled: boolean;
}) => {

    const checkVariant = (variantToCompare: ChipVariant) => {
        return variant === variantToCompare;
    };
    const backgroundColor = getBgColor({
        theme,
        checkVariant,
        bg,
        disabled
    });
    const buttonTextColor = getTextColor({
        theme,
        checkVariant,
        titleColor,
        color,
        disabled
    });
    const buttonBorderColor = getBorderColor({
        theme,
        checkVariant,
        strokeColor,
        disabled,
        color,
    });

    return {
        backgroundColor,
        buttonTextColor,
        buttonBorderColor
    }
};

export { getChipColors };