import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import type { ViewStyle, StyleProp, FlexStyle } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";


type HStackProps = ViewStyle & {
    justify?: FlexStyle['justifyContent'];
    align?: FlexStyle['alignItems'];
    fWrap?: FlexStyle['flexWrap'];
    gap?: number;
    containerStyle?: StyleProp<ViewStyle>;
    children?: React.ReactNode;
}

const HStack: React.FC<HStackProps> = ({
    justify,
    align = 'center',
    fWrap = 'wrap',
    gap = 10,
    containerStyle,
    children,
    ...rest
}) => {
    const calculatedGap: number = useMemo(() => horizontalScale(gap), [gap]);
    const viewProps = {
        gap: calculatedGap,
    };
    const STYLES = StyleSheet.create({
        HSTACK: {
            flexDirection: 'row',
            justifyContent: justify,
            alignItems: align,
            flexWrap: fWrap,
        }
    });

    return (<>
        <View
            style={[viewProps, STYLES.HSTACK, containerStyle]}
            {...rest}
        >
            {children}
        </View>
    </>)
}
export default HStack;
export type { HStackProps };