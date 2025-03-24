import type { FlexStyle, StyleProp, ViewStyle } from "react-native";

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
    containerStyle?: StyleProp<ViewStyle>;

    /** 
     * Child components to be rendered inside the HStack. 
     */
    children?: React.ReactNode;
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
    containerStyle?: StyleProp<ViewStyle>;
};