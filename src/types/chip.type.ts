import type { JSX } from "react";
import type { StyleProp, TextStyle, ViewStyle, TouchableOpacityProps } from "react-native";
import type { TypographyScale } from "./common.type";

/**
 * Props for the Chip component
 */
export type ChipProps = TouchableOpacityProps & {
    /** Text displayed inside the chip */
    label?: string;

    /** Background color of the chip */
    bg?: string;

    /** Color of the label text */
    labelColor?: string;

    /** Font size of the label text (overrides fScale if provided) */
    fs?: number;

    /** Typography scale of the label text (e.g., xs, sm, md, lg, xl) */
    fScale?: TypographyScale;

    /** Font family for the label text */
    ff?: string;

    /** Border radius of the chip */
    br?: number;

    /** Spacing between elements inside the chip */
    gap?: number;

    /** Vertical padding inside the chip */
    paddingV?: number;

    /** Horizontal padding inside the chip */
    paddingH?: number;

    /** Border width of the chip */
    stroke?: number;

    /** Border color of the chip */
    strokeColor?: string;

    /** Ripple effect color when pressed */
    rippleColor?: string;

    /** Disables the chip, preventing interaction */
    disabled?: boolean;

    /** Indicates the chip is active (for styling purposes) */
    active?: boolean;

    /** Icon element to render on the left side of the chip */
    renderLeftIcon?: JSX.Element;

    /** Icon element to render on the right side of the chip */
    renderRightIcon?: JSX.Element;

    /** Custom styles for the chip container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the label text */
    textStyle?: StyleProp<TextStyle>;
};
