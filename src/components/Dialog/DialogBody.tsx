import { type FC } from 'react';
import { ScrollView } from 'react-native';
import { horizontalScale, verticalScale } from '../../helpers/ResponsiveCalculations';
import type { DialogBodyProps, StyledViewProps } from '../../types';
import { StyledView } from '../StyledComponents';


interface props extends DialogBodyProps, StyledViewProps  {
    variant?: 'classic' | 'default';    
}

const DialogBody: FC<props> = ({
    variant,
    scrollEnable = true,
    containerStyle,
    children,
    ...rest
}) => {
    const style = {
        paddingVertical: variant == 'default' ? verticalScale(16) : 0,
        paddingHorizontal: horizontalScale(variant == 'default' ? 16 : 25),
    };
    return (<>
        <ScrollView scrollEnabled={scrollEnable}>
            <StyledView style={[style, containerStyle]} pointerEvents='box-none' {...rest}>
                {children}
            </StyledView>
        </ScrollView>
    </>);
}
export default DialogBody;
export type { DialogBodyProps };