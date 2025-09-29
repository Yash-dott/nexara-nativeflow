import type { StyleProp, ViewStyle } from "react-native";

  /** Props for the Divider component */

export type DividerProps = {
    
    /** Thickness of the divider line */
    thickness?: number;

    /** Custom styles to apply to the divider */
    style?: StyleProp<ViewStyle>;

    /** Color of the divider line; defaults to theme's subtle border color if not provided */
    color?: string;
}
