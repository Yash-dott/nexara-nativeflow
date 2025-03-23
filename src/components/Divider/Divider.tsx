import React from 'react';
import { StyleSheet } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';


type DividerProps = {
    thickness?: number;
    style?: StyleProp<ViewStyle>
    color?: string;
}

const Divider: React.FC<DividerProps> = ({
    thickness = 0.2,
    // color = '#DCDBDB',
    color,
    style
}) => {

    const theme = useTheme();

    const STYLES = StyleSheet.create({
        CONTAINER: {
            borderWidth: thickness,
            borderColor: color ?? theme?.colors.dividerColor
        }
    });

    return (<>
        <StyledView style={[STYLES.CONTAINER, style]} />
    </>);
};
export default Divider;
export type { DividerProps };
