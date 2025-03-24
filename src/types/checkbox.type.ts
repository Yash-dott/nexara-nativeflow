import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { TypographyVariant } from "./common.type";

export type CheckBoxProps = {
    /** Defines the shape of the checkbox: 'square' or 'round' */
    variant?: 'square' | 'round';

    /** Current checked state of the checkbox (controlled component) */
    isChecked?: boolean;

    /** Default checked state (for uncontrolled component) */
    defaultValue?: boolean;

    /** Background color when the checkbox is active (checked) */
    activeBgColor?: string;

    /** Background color when the checkbox is inactive (unchecked) */
    inActiveBgColor?: string;

    /** Color of the checkmark icon */
    iconColor?: string;

    /** If true, disables the built-in state management (for controlled usage) */
    disableBuiltInState?: boolean;

    /** Disables the checkbox, preventing user interaction */
    disabled?: boolean;

    /** Text label displayed next to the checkbox */
    text?: string;

    /** Font size of the text label */
    fs?: number;

    /** Typography variant for text styling */
    textVariant?: TypographyVariant;

    /** Size of the checkbox (width & height) */
    size?: number;

    /** Size of the checkmark icon inside the checkbox */
    iconSize?: number;

    /** Custom styles for the checkbox container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the checkbox itself */
    checkBoxStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the text label */
    textStyle?: StyleProp<TextStyle>;

    /** Callback function triggered when the checkbox is pressed
     *  @param e - The new checked state (true/false)
     */
    onPress?: (e: boolean) => void;
};