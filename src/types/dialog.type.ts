import type { ReactNode } from "react";
import type { StyleProp, TextStyle, ViewStyle } from "react-native";
import type { DialogVariant, TypographyVariant } from "./common.type";


export type DialogRefProps = {
    open: () => void;
    close: () => void;
}
export type DialogProps = {
    /** Defines the dialog style variant */
    variant?: DialogVariant;

    /** Defines the horizontal size of the dialog */
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'full';

    /** If true, the dialog takes up the entire screen */
    fullScreen?: boolean;

    /** Background color of the backdrop */
    backdropColor?: string;

    /** Callback function triggered when the dialog is closed */
    onClose?: () => void;

    /** Custom styles for the dialog container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Content to be displayed inside the dialog */
    children?: ReactNode;
};

export type DialogBodyProps = {

    /** Enables or disables scrolling within the dialog body */
    scrollEnable?: boolean;

    /** Custom styles for the dialog body container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Content to be rendered inside the dialog body */
    children?: ReactNode;
};

export type DialogDescriptionProps = {

    /** Variant of the typography to be applied to the text */
    textVariant?: TypographyVariant;

    /** Font size for the dialog description text */
    fs?: number;

    /** Style for the container wrapping the dialog description */
    containerStyle?: StyleProp<ViewStyle>;

    /** Style for the text inside the dialog description */
    textStyle?: StyleProp<TextStyle>;

    /** Content to be rendered inside the dialog description */
    children?: ReactNode;
};

export type DialogFootProps = {
    /** Custom styles for the container wrapping the dialog footer */
    containerStyle?: StyleProp<ViewStyle>;

    /** Content to be rendered inside the dialog footer */
    children?: ReactNode;
};

export type DialogHeadProps = {
    /** Title text to be displayed in the dialog header */
    title?: string;

    /** Typography variant for styling the title text */
    textVariant?: TypographyVariant;

    /** Font size of the title text */
    fs?: number;

    /** Custom styles for the container wrapping the dialog header */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the title text */
    textStyle?: StyleProp<TextStyle>;

    /** Additional elements or components to be rendered inside the dialog header */
    children?: React.ReactNode;
};
