import type { JSX } from "react";
import type { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";

export type ChipProps = PressableProps & {

    /** Text displayed inside the chip */
    title?: string;

    /** Background color of the chip */
    bg?: string;

    /** Color of the text inside the chip */
    titleColor?: string;

    /** Font size of the title */
    fs?: number;

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

    /** General color for the chip (could be used for text, border, or background) */
    color?: string;

    /** Ripple effect color when pressed */
    rippleColor?: string;

    /** Disables the chip, preventing interaction */
    disabled?: boolean;

    /** Color of the chip's border */
    strokeColor?: string;

    /** Icon to render on the left side of the chip */
    renderLeftIcon?: JSX.Element;

    /** Icon to render on the right side of the chip */
    renderRightIcon?: JSX.Element;

    /** Custom styles for the chip container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the title text */
    textStyle?: StyleProp<TextStyle>;
};