import React, { useMemo } from "react";
import { StyleSheet, View } from "react-native";
import { horizontalScale } from "../../helpers/ResponsiveCalculations";
import type { HStackProps } from "../../types";

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