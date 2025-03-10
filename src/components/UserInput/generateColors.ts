
// import type { ThemeTypes } from '../../themes';

// export type InputVariant = 'outlined' | 'standard';

// const getBorderColor = ({
//     theme,
//     strokeColor,
// }: {
//     theme: ThemeTypes;
//     strokeColor: string | undefined;
// }) => {
//     if (strokeColor) {
//         return strokeColor
//     }
//     return theme.colors.outline;
// };


// const getTextColor = ({
//     theme,
//     checkVariant,
//     textColor,
//     disabled
// }: {
//     theme: ThemeTypes;
//     checkVariant: (variant: InputVariant) => boolean;
//     textColor: string | undefined;
//     disabled: boolean;
// }) => {
//     if (disabled) {
//         return theme.colors.textDisable;
//     }
//     else if (textColor) {
//         return textColor
//     }
//     else if (checkVariant('outlined')) {
//         return theme.colors.textPrimary;
//     }
//     return theme.colors.textSecondary;
// };

// const getBgColor = ({
//     theme,
//     checkVariant,
//     bg,
//     disabled
// }: {
//     theme: ThemeTypes;
//     checkVariant: (variant: InputVariant) => boolean;
//     bg: string | undefined;
//     disabled: boolean;
// }) => {
//     if (disabled) {
//         return theme.colors.disable;
//     }
//     else if (bg) {
//         return bg
//     }
//     else if (checkVariant('contained')) {
//         return theme.colors.primary;
//     }
//     else if (checkVariant('outlined')) {
//         return 'transparent';
//     }
//     return theme.colors.primary;
// };

// const getInputColors = ({
//     theme,
//     variant,
//     textColor,
//     bg,
//     strokeColor,
//     disabled
// }: {
//     theme: ThemeTypes;
//     variant: InputVariant;
//     textColor: string | undefined;
//     bg: string | undefined;
//     strokeColor: string | undefined;
//     disabled: boolean;
// }) => {

//     const checkVariant = (variantToCompare: InputVariant) => {
//         return variant === variantToCompare;
//     };
//     const backgroundColor = getBgColor({
//         theme,
//         checkVariant,
//         bg,
//         disabled
//     });
//     const buttonTextColor = getTextColor({
//         theme,
//         checkVariant,
//         textColor,
//         disabled
//     });
//     const buttonBorderColor = getBorderColor({
//         theme,
//         strokeColor,
//     });

//     return {
//         backgroundColor,
//         buttonTextColor,
//         buttonBorderColor
//     }
// };

// export { getInputColors };