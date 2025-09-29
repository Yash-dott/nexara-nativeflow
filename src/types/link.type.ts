import type { TextStyle } from "react-native";
import type { StyledTextProps } from "./styledComponents.type";

/** Props for the Link component */

export type LinkProps = StyledTextProps & {
    /** The visible text of the link */
    title: string;

    /** The URL to be opened when the link is pressed */
    href: string;

    /** Optional custom styles for the text */
    style?: TextStyle;
}