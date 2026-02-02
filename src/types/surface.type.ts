import type { ReactNode } from "react";
import type { StyledViewProps } from "./styledComponents.type";

/**
 * Props for the Surface component
 */
export type SurfaceProps = StyledViewProps & {
    /** Padding inside the surface container (applied uniformly) */
    padding?: number;

    /** Border radius of the surface container */
    br?: number;

    /** Style variant of the surface: 'elevated' adds shadow, 'outlined' adds border */
    variant?: 'elevated' | 'outlined' | 'default';

    /** Child components to be rendered inside the surface */
    children?: ReactNode;
};
