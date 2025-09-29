import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { TypographyScale } from "./common.type";

/**
 * Props for the CheckBox component
 */
export type CheckBoxProps = {
    /** Shape of the checkbox: 'square' or 'round' */
    variant?: 'square' | 'round';

    /** Current checked state (for controlled component) */
    isChecked?: boolean;

    /** Default checked state (for uncontrolled component) */
    defaultValue?: boolean;

    /** Background color when the checkbox is active (checked) */
    activeBgColor?: string;

    /** Background color when the checkbox is inactive (unchecked) */
    inActiveBgColor?: string;

    /** Color of the checkmark icon */
    iconColor?: string;

    /** Disables built-in state handling (for controlled usage) */
    disableBuiltInState?: boolean;

    /** Disables the checkbox, preventing user interaction */
    disabled?: boolean;

    /** Text label displayed next to the checkbox */
    label?: string;

    /** Typography scale for the label text (maps to your design system) */
    fScale?: TypographyScale;

    /** Font size of the label text (overrides fScale if provided) */
    fs?: number;

    /** Font family for the label text */
    ff?: string;

    /** Size of the checkbox (width & height) */
    size?: number;

    /** Size of the checkmark icon inside the checkbox */
    iconSize?: number;

    /** Custom styles for the outer container of checkbox + label */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the checkbox itself */
    checkBoxStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the label text */
    labelStyle?: StyleProp<TextStyle>;

    /**
     * Callback triggered when the checkbox is pressed.
     * @param checked - The new checked state (true/false)
     */
    onPress?: (checked: boolean) => void;
};
