import type { ButtonVariant, ThemeTypes } from "../../types";


const getButtonBorderColor = ({
    theme,
    strokeColor,
    disabled
}: {
    theme: ThemeTypes;
    strokeColor: string | undefined;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.outline;
    }
    if (strokeColor) {
        return strokeColor
    }
    return theme.colors.outline;
};


const getButtonTextColor = ({
    theme,
    checkVariant,
    titleColor,
    disabled
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ButtonVariant) => boolean;
    titleColor: string | undefined;
    disabled: boolean;
}) => {

    if (disabled) {
        return theme.colors.textDisable;
    }
    else if (titleColor) {
        return titleColor
    }
    else if (checkVariant('outlined')) {
        return theme.colors.textPrimary;
    }
    return theme.colors.textSecondary;
};

const getButtonBackgroundColor = ({
    theme,
    checkVariant,
    bg,
    disabled
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ButtonVariant) => boolean;
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
        return theme.colors.primary;
    }
    else if (checkVariant('outlined')) {
        return 'transparent';
    }
    return theme.colors.primary;
};


const getButtonIconColor = ({
    theme,
    checkVariant,
    disabled,
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ButtonVariant) => boolean;
    disabled: boolean;
}) => {
    if (disabled) {
        return theme.colors.iconDisable;
    } else if (checkVariant('outlined')) {
        return theme.colors.iconPrimary
    }
    return theme.colors.iconSecondary;
};

const getButtonColors = ({
    theme,
    variant,
    bg,
    titleColor,
    strokeColor,
    disabled
}: {
    theme: ThemeTypes;
    variant: ButtonVariant;
    bg: string | undefined;
    titleColor: string | undefined;
    strokeColor: string | undefined;
    disabled: boolean;
}) => {

    const checkVariant = (variantToCompare: ButtonVariant) => {
        return variant === variantToCompare;
    };
    const backgroundColor = getButtonBackgroundColor({
        theme,
        checkVariant,
        bg,
        disabled
    });
    const buttonTextColor = getButtonTextColor({
        theme,
        checkVariant,
        titleColor,
        disabled
    });
    const buttonBorderColor = getButtonBorderColor({
        theme,
        strokeColor,
        disabled
    });
    const buttonIconColor = getButtonIconColor({
        checkVariant,
        theme,
        disabled
    });

    return {
        backgroundColor,
        buttonTextColor,
        buttonBorderColor,
        buttonIconColor
    }
};

export { getButtonColors };