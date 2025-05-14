import { type KeyboardEvent } from "react-native";


declare global {
    interface ExtendedKeyboardEvent extends KeyboardEvent {
        duration?: number;
        easing?: string;
        endCoordinates?: {
            height: number;
            screenY: number;
        };
    }
}