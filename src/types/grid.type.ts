import type { StyleProp, ViewStyle } from "react-native";

export type GridProps = ViewStyle & {
    /**
     * If true, the component will act as a grid container.
     * Similar to CSS flex/grid container.
     */
    container?: boolean;

    /**
     * If true, the component will act as a grid item.
     * Should be used inside a container.
     */
    item?: boolean;

    /**
     * Defines the spacing (margin) between grid items.
     */
    spacing?: number;

    /**
     * Defines the horizontal spacing (paddingLeft & paddingRight).
     */
    spacingH?: number;

    /**
     * Defines the vertical spacing (paddingTop & paddingBottom).
     */
    spacingV?: number;

    /**
     * Specifies the number of columns inside grid.
     */
    size?: number;

    /** 
        * Number of columns the grid item should take on extra-small screens (mobile phones). 
    */
    xs?: number;

    /** 
     * Number of columns the grid item should take on small screens (tablets). 
     */
    sm?: number;

    /** 
     * Number of columns the grid item should take on medium screens (small laptops). 
     */
    md?: number;

    /** 
     * Number of columns the grid item should take on large screens (desktops). 
     */
    lg?: number;

    /** 
     * Number of columns the grid item should take on extra-large screens (big monitors). 
     */
    xl?: number;

    /**
     * Custom styles for the grid container.
     */
    containerStyle?: StyleProp<ViewStyle>;

    /**
     * Children components inside the Grid.
     */
    children?: React.ReactNode;
};
