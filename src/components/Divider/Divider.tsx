import React from 'react';
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
    color,
    style
}) => {

    const theme = useTheme();

    const dynamicStyles = {
        borderWidth: thickness,
        borderColor: color ?? theme?.colors.dividerColor
    };
    return (<>
        <StyledView style={[dynamicStyles, style]} />
    </>);
};
export default Divider;
export type { DividerProps };
