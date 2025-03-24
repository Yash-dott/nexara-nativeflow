import type { ImageProps, StyleProp, ViewStyle, ImageStyle, TextStyle } from "react-native";

/** Props for the AvatarImage component */
export type AvatarImageProps = {
    /** Size of the avatar (width & height) */
    size?: number;

    /** Image source (can be a remote URI or a local asset reference) */
    source?: { uri?: string } | number;

    /** Background color of the avatar */
    bg?: string;

    /** Defines how the image should be resized to fit its container */
    resizeMode?: NonNullable<ImageProps['resizeMode']>;

    /** Custom styles for the avatar container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the image inside the avatar */
    imageStyle?: StyleProp<ImageStyle>;
};

/** Props for the AvatarText component */
export type AvatarTextProps = {
    /** Size of the avatar (width & height) */
    size?: number;

    /** Font size of the text inside the avatar */
    fs?: number;

    /** Text to be displayed inside the avatar (e.g., initials) */
    text?: string;

    /** Background color of the avatar */
    bg?: string;

    /** Custom styles for the avatar container */
    containerStyle?: StyleProp<ViewStyle>;

    /** Custom styles for the text inside the avatar */
    textStyle?: StyleProp<TextStyle>;
};
