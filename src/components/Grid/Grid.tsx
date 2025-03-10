import React from 'react';
import { View, StyleSheet } from "react-native";
import type { ViewStyle, StyleProp } from "react-native";
import { getGridValue } from '../../helpers';


type GridProps = ViewStyle & {
    container?: boolean;
    item?: boolean;
    spacing?: number;
    spacingH?: number;
    spacingV?: number;
    size?: number;
    xs?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
    containerStyle?: StyleProp<ViewStyle>
    children?: React.ReactNode;
}

const Grid: React.FC<GridProps> = ({
    container = false,
    item = false,
    spacing = 0,
    spacingH = 0,
    spacingV = 0,
    size = 12,
    xs = 12,
    sm = 0,
    md = 0,
    lg = 0,
    xl = 0,
    containerStyle,
    children,
    ...rest
}) => {
    container = !item;
    xs = Math.min(xs, 12);
    sm = Math.min(sm, 12);
    md = Math.min(md, 12);
    lg = Math.min(lg, 12);
    xl = Math.min(xl, 12);

    const calculatedGridValue: number = getGridValue({
        xs,
        sm,
        md,
        lg,
        xl,
    });
    console.log((calculatedGridValue / size) * 100)
    const STYLES = StyleSheet.create({
        MAIN_CONT: {
            width: item ? `${((calculatedGridValue / size) * 100)}%` : "100%",
            flexDirection: 'row',
            flexWrap: container ? 'wrap' : 'nowrap',
            paddingHorizontal: spacingH,
            paddingVertical: spacingV,
            gap: spacing,
            alignItems: 'center'
        }
    });

    return (<>
        <View
            style={[STYLES.MAIN_CONT, containerStyle]}
            {...rest}
        >
            {children}
        </View>
    </>);
};
export default Grid;
export type { GridProps };
