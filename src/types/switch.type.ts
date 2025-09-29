import type { SwitchProps as NativeSwitchProps } from "react-native";

export type SwitchProps = NativeSwitchProps & {
    /** 
     * Determines whether the switch is turned on or off.
     */
    checked?: boolean;

    /** 
     * The color of the switch thumb.
     */
    color?: string;

    /** 
     * If true, the switch will be disabled and not interactable.
     */
    disabled?: boolean;

    /** 
     * The size of the switch thumb and track.
     */
    size?: number;

    /** 
     * The color of the track when the switch is in the "on" position.
     */
    activeTrackColor?: string;

    /** 
     * The color of the track when the switch is in the "off" position.
     */
    inactiveTrackColor?: string;

    /** 
     * Callback function triggered when the switch state changes.
     * @param newValue - The updated boolean value of the switch.
     */
    onChange?: (newValue: boolean) => void;
};
