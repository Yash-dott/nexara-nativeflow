import type { PressableProps, StyleProp, TextStyle, ViewStyle } from "react-native";
import type { ChipVariant } from "./common.type";

export type ChipProps = PressableProps & {
    /** Defines the style variant of the chip (e.g., outlined, filled, etc.) */
    variant?: ChipVariant;

    /** Determines the chip shape: 'round' for circular, 'flat' for rectangular */
    type?: 'round' | 'flat';

    /** Text displayed inside the chip */
    title?: string;

    /** Background color of the chip */
    bg?: string;

    /** Color of the text inside the chip */
    titleColor?: string;

    /** Font size of the title */
    fs?: number;

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