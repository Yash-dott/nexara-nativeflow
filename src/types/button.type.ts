import type { StyleProp, TextStyle, TouchableOpacityProps, ViewStyle } from "react-native";
import type { ButtonVariant, TypographyVariant } from "./common.type";
import type { JSX } from "react";

/**
 * @see https://rn-nativeflow-docs.onrender.com/docs/components/button
 */
export type ButtonProps = TouchableOpacityProps & {
    /** Specifies the button style variant (e.g., 'contained', 'outlined') */
    variant?: ButtonVariant;

    /** Determines button shape - 'round' or 'flat' */
    type?: 'round' | 'flat';

    /** Whether the button should expand to full width */
    fullWidth?: boolean;

    /** Horizontal padding inside the button */
    paddingH?: number;

    /** Vertical padding inside the button */
    paddingV?: number;

    /** Custom background color */
    bg?: string;

    /** Border radius of the button */
    br?: number;

    /** Border width (for outlined buttons) */
    stroke?: number;

    /** Border color */
    strokeColor?: string;

    /** Text color */
    titleColor?: string;

    /** Button text */
    title?: string;

    /** Font size of the button text */
    titleFS?: number;

    /** Typography variant (h1, h2, h3, etc.) */
    titleVariant?: TypographyVariant;

    /** Font family for the button text */
    titleFF?: string;

    /** Custom size (for round buttons) */
    size?: number;

    /** Ripple effect color */
    rippleColor?: string;

    /** Icon element to be displayed inside the button */
    renderIcon?: JSX.Element;

    /** Left-side icon */
    renderLeftIcon?: JSX.Element;

    /** Right-side icon */
    renderRightIcon?: JSX.Element;

    /** Disables the button when `true` */
    disabled?: boolean;

    /** Custom styles for the button container */
    buttonContainerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the text */
    textStyle?: StyleProp<TextStyle>;

    /** Function to execute when button is pressed */
    onPress?: () => void;
};