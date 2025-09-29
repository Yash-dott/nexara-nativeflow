import { type FC } from 'react';
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import type { DividerProps } from '../../types';


const Divider: FC<DividerProps> = ({
    thickness = 0.7,
    color,
    style
}) => {
    const theme = useTheme();
    const dynamicStyles = {
        borderWidth: thickness,
        borderColor: color ?? theme?.colors.border.subtle
    };
    return (
        <StyledView style={[dynamicStyles, style]} />
    );
};
export default Divider;
export type { DividerProps };
