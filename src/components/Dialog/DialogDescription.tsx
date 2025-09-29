import { type FC } from 'react';
import { View } from 'react-native';
import { verticalScale } from '../../helpers/ResponsiveCalculations';
import { StyledText } from '../StyledComponents';
import type { DialogDescriptionProps } from '../../types';

const DialogDescription: FC<DialogDescriptionProps> = ({
    fScale = 'sm',
    containerStyle,
    textStyle,
    children,
    ...rest
}) => {
    return (<>
        <View style={containerStyle}>
            <StyledText
                style={[{ lineHeight: verticalScale(20) }, textStyle]}
                variant='tertiary'
                fScale={fScale}
                {...rest}
            >
                {children}
            </StyledText>
        </View>
    </>);
}
export default DialogDescription;
export type { DialogDescriptionProps };