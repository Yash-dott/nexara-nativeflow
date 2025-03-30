import React from "react";
import type { FlexStyle, StyleProp, View, ViewStyle } from "react-native";

export type HStackProps = ViewStyle & {
    /** 
     * Defines the alignment of children along the main axis. 
     */
    justify?: FlexStyle['justifyContent'];

    /** 
     * Defines the alignment of children along the cross axis. 
     */
    align?: FlexStyle['alignItems'];

    /** 
     * Determines whether the items should wrap onto multiple lines. 
     */
    fWrap?: FlexStyle['flexWrap'];

    /** 
     * Space between child components. 
     */
    gap?: number;

    /** 
     * Custom styles for the container. 
     */
    style?: StyleProp<ViewStyle>;

    /** 
     * Child components to be rendered inside the HStack. 
     */
    children?: React.ReactNode;

    /**  
     * A ref to access the underlying View component.  
     * This can be used for measuring layout, animations, or imperative interactions.  
     */
    ref?: React.RefObject<View>
};

export type VStackProps = ViewStyle & {
    /** 
     * Child components to be rendered inside the VStack. 
     */
    children?: React.ReactNode;

    /** 
     * Defines the alignment of children along the cross axis. 
     */
    align?: FlexStyle['alignItems'];

    /** 
     * Space between child components. 
     */
    gap?: number;

    /** 
     * Custom styles for the container. 
     */
    style?: StyleProp<ViewStyle>;

    /**  
        * A ref to access the underlying View component.  
        * This can be used for measuring layout, animations, or imperative interactions.  
    */
    ref?: React.RefObject<View>
};