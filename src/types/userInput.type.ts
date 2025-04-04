import type { StyleProp, TextInput, TextInputProps, TextStyle, ViewStyle } from "react-native";
import type { TypographyVariant, UserInputVariant } from "./common.type";
import type { JSX } from "react";

export type UserInputProps = TextInputProps & {
    /** 
     * Defines the input style variant.
     * - 'outlined': Input has a border around it.
     * - 'standard': Only the bottom border is visible.
     * @default 'standard'
     */
    variant?: UserInputVariant;

    /** Label text displayed above the input field. */
    label?: string;

    /** Background color of the input container. */
    bg?: string;

    /** Border radius of the input field. */
    br?: number;

    /** Border stroke width (thickness). */
    stroke?: number;

    /** Color of the label text. */
    labelColor?: string;

    /**
     * Defines typography styles for text elements.
     * - `label`: Typography variant for the label.
     * - `helperText`: Typography variant for the helper text.
     */
    textVariant?: {
        label?: TypographyVariant;
        helperText?: TypographyVariant;
    };

    /** Color of the text inside the input field. */
    inputTextColor?: string;

    /** Border color of the input field. */
    strokeColor?: string;

    /** Cursor color when typing in the input field. */
    cursorColor?: string;

    /** Color of the placeholder text. */
    placeholderColor?: string;

    /** Font size of the input text. */
    inputFs?: number;

    /** Font size of the label text. */
    labelFs?: number;

    /** Font size of the helper text. */
    helperTextFS?: number;

    /** Placeholder text displayed when input is empty. */
    placeholder?: string;

    /** If `true`, the input field is marked as an error (e.g., invalid input). */
    isError?: boolean;

    /** Helper text displayed below the input field (e.g., validation message). */
    helperText?: string;

    /** If `true`, the input field is disabled and cannot be interacted with. */
    disabled?: boolean;

    /** If `true`, the input field allows multiple lines of text. */
    multiline?: boolean;

    /** Renders a custom left icon inside the input field. */
    renderLeftIcon?: JSX.Element;

    /** Renders a custom right icon inside the input field. */
    renderRightIcon?: JSX.Element;

    /**
     * Custom styles for different parts of the component.
     * - `mainContainer`: Styles for the outermost wrapper.
     * - `inputContainer`: Styles for the input field container.
     * - `input`: Styles for the actual text input.
     * - `label`: Styles for the label text.
     * - `helperText`: Styles for the helper text.
     */
    styles?: {
        mainContainer?: StyleProp<ViewStyle>;
        inputContainer?: StyleProp<ViewStyle>;
        input?: StyleProp<TextStyle>;
        label?: StyleProp<TextStyle>;
        helperText?: StyleProp<TextStyle>;
    };

    /**  
        * A ref to access the underlying View component.  
        * This can be used for measuring layout, animations, or imperative interactions.  
    */
    ref?: React.RefObject<TextInput>
};
