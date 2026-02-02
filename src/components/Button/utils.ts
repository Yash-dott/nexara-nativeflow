import type { ButtonVariant, ThemeTypes } from "../../types";


const getButtonBorderColor = ({
    theme,
    strokeColor,
    disabled,
    loading
}: {
    theme: ThemeTypes;
    strokeColor: string | undefined;
    disabled: boolean;
    loading: boolean;
}) => {
    if (disabled || loading) {
        return theme.colors.border.default;
    }
    if (strokeColor) {
        return strokeColor
    }
    return theme.colors.border.default;
};


const getButtonTextColor = ({
    theme,
    checkVariant,
    titleColor,
    disabled,
    loading
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ButtonVariant) => boolean;
    titleColor: string | undefined;
    disabled: boolean;
    loading: boolean;
}) => {

    if (disabled || loading) {
        return theme.colors.typography.disabled;
    }
    else if (titleColor) {
        return titleColor
    }
    else if (checkVariant('outlined')) {
        return theme.colors.typography.primary;
    }
    return theme.colors.brand.onPrimary;
};

const getButtonBackgroundColor = ({
    theme,
    checkVariant,
    bg,
    disabled,
    loading
}: {
    theme: ThemeTypes;
    checkVariant: (variant: ButtonVariant) => boolean;
    bg: string | undefined;
    disabled: boolean;
    loading: boolean;
}) => {

    if (disabled || loading) {
        return theme.colors.states.disabled;
    }
    else if (bg) {
        return bg
    }
    else if (checkVariant('contained')) {
        return theme.colors.brand.primary;
    }
    else if (checkVariant('outlined')) {
        return 'transparent';
    }
    return theme.colors.brand.primary;
};


// const getButtonIconColor = ({
//     theme,
//     checkVariant,
//     disabled,
// }: {
//     theme: ThemeTypes;
//     checkVariant: (variant: ButtonVariant) => boolean;
//     disabled: boolean;
// }) => {
//     if (disabled) {
//         return theme.colors.iconDisable;
//     } else if (checkVariant('outlined')) {
//         return theme.colors.iconPrimary
//     }
//     return theme.colors.iconSecondary;
// };

const getButtonColors = ({
    theme,
    variant,
    bg,
    titleColor,
    strokeColor,
    disabled,
    loading
}: {
    theme: ThemeTypes;
    variant: ButtonVariant;
    bg: string | undefined;
    titleColor: string | undefined;
    strokeColor: string | undefined;
    disabled: boolean;
    loading: boolean;
}) => {

    const checkVariant = (variantToCompare: ButtonVariant) => {
        return variant === variantToCompare;
    };
    const backgroundColor = getButtonBackgroundColor({
        theme,
        checkVariant,
        bg,
        disabled,
        loading
    });
    const buttonTextColor = getButtonTextColor({
        theme,
        checkVariant,
        titleColor,
        disabled,
        loading
    });
    const buttonBorderColor = getButtonBorderColor({
        theme,
        strokeColor,
        disabled,
        loading
    });
    // const buttonIconColor = getButtonIconColor({
    //     checkVariant,
    //     theme,
    //     disabled
    // });

    return {
        backgroundColor,
        buttonTextColor,
        buttonBorderColor,
        // buttonIconColor
    }
};

export { getButtonColors };