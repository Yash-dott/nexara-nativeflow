import type { JSX, ReactNode } from "react";
import type { StyleProp, TextStyle, TouchableOpacityProps, View, ViewStyle } from "react-native";
import type { TypographyVariant } from "./common.type";


export type MenuProps = {
    /** 
     * Defines the placement of the menu relative to the anchor element. 
     * Options: 'top' | 'bottom'. 
     */
    placement?: 'top' | 'bottom';

    /** 
     * The element that triggers the menu when interacted with. 
     */
    anchor?: JSX.Element;

    /** 
     * Disables the built-in state management of the menu. 
     * If true, you must control the open state manually. 
     */
    disableBuiltInState?: boolean;

    /** 
     * Controls whether the menu is open. 
     * Used when `disableBuiltInState` is true. 
     */
    isOpen?: boolean;

    /** 
     * Callback triggered when the menu is requested to open. 
     */
    onRequestOpen?: () => void;

    /** 
     * Callback triggered when the menu is requested to close. 
     */
    onRequestClose?: () => void;

    /** 
     * Callback triggered when an item is selected. 
     * Receives the name of the selected item. 
     */
    onSelect?: (name: string | undefined) => void;

    /** 
     * Custom styles for the menu container. 
     */
    style?: StyleProp<ViewStyle>;

    /** 
     * Child components to be rendered inside the menu. 
     */
    children?: ReactNode;

    /**  
     * A ref to access the underlying View component.  
     * This can be used for measuring layout, animations, or imperative interactions.  
     */
    ref?: React.RefObject<View | null>
};


export type MenuItemProps = TouchableOpacityProps & {
    /** 
     * Vertical padding inside the menu item. 
     */
    paddingV?: number;

    /** 
     * Horizontal padding inside the menu item. 
     */
    paddingH?: number;

    /** 
     * Space between elements inside the menu item. 
     */
    gap?: number;

    /** 
     * The name or identifier of the menu item. 
     */
    name?: string;

    /** 
     * Custom styles for the menu item container. 
     */
    style?: StyleProp<ViewStyle>;

    /** 
     * Child components to be rendered inside the menu item. 
     */
    children?: ReactNode;
};

export type MenuItemLabelProps = TextStyle & {
    /** 
     * Font size of the label text. 
     */
    fs?: number;

    /** 
     * Typography variant for the label text. 
     */
    textVariant?: TypographyVariant;

    /** 
     * Custom styles for the text component. 
     */
    style?: StyleProp<TextStyle>;

    /** 
     * Text to be displayed inside the label. 
     */
    children?: ReactNode;
};