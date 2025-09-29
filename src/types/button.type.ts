import type { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import type { ButtonVariant, TypographyScale } from "./common.type";
import type { JSX } from "react";

/**
 * @see https://rn-nativeflow-docs.onrender.com/docs/components/button
 */
export type ButtonProps = TouchableOpacityProps & {
    /** Specifies the button style variant (e.g., 'contained', 'outlined') */
    variant?: ButtonVariant;

    /** Determines button shape - 'round' or 'flat' */
    type?: 'round' | 'flat';

    /** Expands the button to occupy the full available width */
    fullWidth?: boolean;

    /** Horizontal padding inside the button */
    paddingH?: number;

    /** Vertical padding inside the button */
    paddingV?: number;

    /** Custom background color (applies to contained buttons) */
    bg?: string;

    /** Border radius of the button */
    br?: number;

    /** Border width (used in outlined variant) */
    stroke?: number;

    /** Border color (used in outlined variant) */
    strokeColor?: string;

    /** Text (label) color */
    titleColor?: string;

    /** Text (label) displayed on the button */
    title?: string;

    /** Font size of the button text */
    fs?: number;

    /** Typography scale (h1, h2, body, caption, etc.) */
    fScale?: TypographyScale;

    /** Font family for the button text */
    ff?: string;

    /** Size of the button (applies when `type="round"`) */
    size?: number;

    /** Ripple effect color for button press feedback */
    rippleColor?: string;

    /** Single icon element placed at the center (used mostly in round buttons) */
    renderIcon?: JSX.Element;

    /** Icon displayed before the button text */
    renderLeftIcon?: JSX.Element;

    /** Icon displayed after the button text */
    renderRightIcon?: JSX.Element;

    /** Disables the button when true */
    disabled?: boolean;

    /** Custom styles for the button container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the title text */
    titleStyle?: StyleProp<TextStyle>;

    /** Function to execute when button is pressed */
    onPress?: () => void;
};