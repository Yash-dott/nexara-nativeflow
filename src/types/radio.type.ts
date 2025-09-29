import type { ReactNode } from "react";
import type { StyledTextProps, StyledViewProps } from "./styledComponents.type";
import type { TouchableOpacityProps } from "react-native";
import type { TypographyScale } from "./common.type";

/**
 * Props for the RadioGroup component
 */
export type RadioGroupProps = StyledViewProps & {
  /**
   * Unique name for the radio group (useful for forms or multiple groups)
   */
  name?: string;

  /**
   * Default selected value (for uncontrolled usage)
   */
  defaultValue?: string;

  /**
   * Current selected value (for controlled usage)
   */
  value?: string;

  /**
   * Children must be Radio components
   */
  children: ReactNode;

  /**
   * Callback when a radio option is selected
   * @param name - Group name
   * @param value - Selected value
   */
  onSelect?: (name: string, value: string) => void;
};


/**
 * Props for the RadioItem component
 */
export type RadioItemProps = TouchableOpacityProps & {
  /** Size of the radio circle */
  size?: number;

  /** Border stroke width of the outer circle */
  stroke?: number;

  /** Custom color for the radio item (defaults to theme color) */
  color?: string;

  /** Whether this item is selected */
  active?: boolean;

  /** Unique name of the radio item (used in groups) */
  name?: string;

  /** Value associated with this radio item */
  value: string;

  /** If true, the radio item is disabled */
  disabled?: boolean;

  /** Optional label text displayed beside the radio item */
  label?: string;

  /** Font size override for the label */
  fs?: number;

  /** Typography scale for the label */
  fScale?: TypographyScale;

  /** Font family for the label */
  ff?: string;

  /** Additional style props for the label text */
  labelStyle?: StyledTextProps;
};
