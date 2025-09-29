import { type FC } from 'react';
import { type ViewStyle } from 'react-native';
import { horizontalScale, verticalScale } from '../../helpers/ResponsiveCalculations';
import type { DialogFootProps } from '../../types';
import { useTheme } from '../../hooks';
import { StyledView } from '../StyledComponents';


interface props extends DialogFootProps {
    variant?: 'classic' | 'default';
}

const DialogFoot: FC<props> = ({
    variant,
    containerStyle,
    children,
    ...rest
}) => {
    const theme = useTheme();

    const dynamicStyles: ViewStyle = {
        borderTopWidth: variant === 'default' ? 0.7 : 0,
        borderColor: theme?.colors.border.subtle,
        padding: verticalScale(variant === 'default' ? 16 : 20),
        paddingHorizontal: horizontalScale(variant === 'default' ? 16 : 25),
        justifyContent: 'flex-end',
        flexDirection: 'row'
    };
    return (<>
        <StyledView style={[dynamicStyles, containerStyle]} {...rest}>
            {children}
        </StyledView>
    </>);
}
export default DialogFoot;
export type { DialogFootProps };