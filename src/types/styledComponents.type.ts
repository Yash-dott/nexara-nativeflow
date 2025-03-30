import type { ColorValue, DimensionValue, StyleProp, TextProps, TextStyle, View, ViewProps, ViewStyle } from "react-native";
import type { TypographyVariant } from "./common.type";
import React from "react";

export type StyledViewProps = ViewStyle & ViewProps & {
    /** 
     * Flex value to control the flex growth, shrink, and basis of the view. 
     */
    f?: number;

    /** 
     * Defines how children are aligned along the main axis. 
     */
    justify?: ViewStyle['justifyContent'];

    /** 
     * Defines how children are aligned along the cross axis. 
     */
    align?: ViewStyle['alignItems'];

    /** 
     * Determines whether the children should wrap if they exceed the container size. 
     */
    fWrap?: ViewStyle['flexWrap'];

    /** 
     * Background color of the view. 
     */
    bg?: string;

    /** 
     * Whether the background color should be derived from the theme. 
     */
    themeBg?: boolean;

    /** 
     * Height of the view, can be a number or a percentage string. 
     */
    h?: DimensionValue;

    /** 
     * Width of the view, can be a number or a percentage string. 
     */
    w?: DimensionValue;

    /** 
     * Child components to be rendered inside StyledView. 
     */
    children?: React.ReactNode;

    /** 
     * Custom styles for the view component. 
     */
    style?: StyleProp<ViewStyle>;

     /**  
     * A ref to access the underlying View component.  
     * This can be used for measuring layout, animations, or imperative interactions.  
     */
    ref?: React.RefObject<View>
};

export type StyledTextProps = TextProps & {
    /** 
     * Defines the typography variant for the text. 
     */
    variant?: TypographyVariant;

    /** 
     * Text content to be rendered inside StyledText. 
     */
    children?: React.ReactNode;

    /** 
     * Custom styles for the text component. 
     */
    style?: StyleProp<TextStyle>;

    /** 
     * Font family for the text. 
     */
    ff?: string;

    /** 
     * Font size of the text. 
     */
    fs?: number;

    /** 
     * Font weight of the text. 
     */
    fw?: TextStyle['fontWeight'];

    /** 
     * Whether the text should be automatically capitalized or adjusted based on the theme. 
     */
    tas?: boolean;

    /** 
     * Color of the text. Accepts standard color values. 
     */
    color?: ColorValue;

    /** 
     * Whether the text color should be derived from the theme. 
     */
    themeColor?: boolean;

    /** 
     * Whether the text should use the primary theme color. 
     */
    primary?: boolean;

    /** 
     * Whether the text should use the secondary theme color. 
     */
    secondary?: boolean;
};