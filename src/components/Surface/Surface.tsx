import type { FC } from 'react';
import { StyledView } from '../StyledComponents';
import { useTheme } from '../../hooks';
import { verticalScale } from '../../helpers';
import type { SurfaceProps } from '../../types';

const Surface: FC<SurfaceProps> = ({
    variant = 'elevated',
    padding = 10,
    br = 5,
    children,
    ...rest
}) => {

    const { colors }: any = useTheme();
    const styles = variant === 'elevated' ? { boxShadow: colors.elevation.level1 } : { borderColor: colors.border.default, borderWidth: 0.5 };

    return (<>
        <StyledView
            padding={verticalScale(padding)}
            borderRadius={verticalScale(br)}
            bg={colors.background.surface}
            {...styles}
            {...rest}
        >
            {children}
        </StyledView>
    </>);
};
export default Surface;
export type { SurfaceProps };
