import type { ColorValue, DimensionValue, StyleProp, TextProps, TextStyle, View, ViewProps, ViewStyle } from "react-native";
import React from "react";
import type { TypographyScale, TypographyVariant } from "./common.type";

export type StyledViewProps = ViewStyle & ViewProps & {
    /** Flex value to control the flex growth, shrink, and basis of the view */
    f?: number;

    /** How children are aligned along the main axis */
    justify?: ViewStyle['justifyContent'];

    /** How children are aligned along the cross axis */
    align?: ViewStyle['alignItems'];

    /** Whether children should wrap if they exceed the container size */
    fWrap?: ViewStyle['flexWrap'];

    /** Background color of the view */
    bg?: string;

    /** Whether the background color should be derived from the theme */
    themeBg?: boolean;

    /** Height of the view (number = pixels, string = percentage) */
    h?: DimensionValue;

    /** Width of the view (number = pixels, string = percentage) */
    w?: DimensionValue;

    /** Child components to be rendered inside StyledView */
    children?: React.ReactNode;

    /** Custom styles for the view component */
    style?: StyleProp<ViewStyle>;

    /** Ref to access the underlying View component */
    ref?: React.Ref<View>;
};

export type StyledTextProps = TextProps & TextStyle & {
    /** Typography scale for font size (e.g., xs, sm, md, lg, xl) */
    fScale?: TypographyScale;

    /** Typography variant to determine default text color */
    variant?: TypographyVariant;

    /** Text content to be rendered inside StyledText */
    children?: React.ReactNode;

    /** Custom styles for the Text component */
    style?: StyleProp<TextStyle>;

    /** Font family for the text */
    ff?: string;

    /** Font size of the text (overrides fScale if provided) */
    fs?: number;

    /** Font weight of the text */
    fw?: TextStyle['fontWeight'];

    /** Text align center flag (true = center, false/undefined = auto) */
    tas?: boolean;

    /** Color of the text (overrides variant and themeColor if provided) */
    color?: ColorValue;

    /** Whether to derive text color from the theme */
    themeColor?: boolean;
};
