import { useMemo, type FC } from 'react';
import { StyleSheet } from "react-native";
import { getGridValue } from '../../helpers';
import { useConditionalWindowDimension } from '../../hooks';
import type { GridProps } from '../../types';
import { StyledView } from '../StyledComponents';

const Grid: FC<GridProps> = ({
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

    const { width: windowWidth } = useConditionalWindowDimension(item);

    const calculatedGridValue: number = item ? useMemo(() => getGridValue({
        xs,
        sm,
        md,
        lg,
        xl,
    }, windowWidth), [windowWidth, xs, sm, md, lg, xl]) : 12;

    const STYLES = StyleSheet.create({
        MAIN_CONT: {
            width: item ? `${((calculatedGridValue / size) * 100)}%` : "100%",
            flexDirection: 'row',
            flexWrap: container ? 'wrap' : 'nowrap',
            paddingHorizontal: spacingH,
            paddingVertical: spacingV,
            gap: spacing,
        },
    });
    return (<>
        <StyledView
            style={[STYLES.MAIN_CONT, containerStyle]}
            {...rest}
        >
            {children}
        </StyledView>
    </>);
};
export default Grid;
export type { GridProps };
