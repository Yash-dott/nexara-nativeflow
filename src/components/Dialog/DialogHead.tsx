import { useMemo, type FC } from 'react';
import { View, StyleSheet } from 'react-native';
import { verticalScale } from '../../helpers/ResponsiveCalculations';
import { StyledText } from '../StyledComponents';
import type { DialogHeadProps } from '../../types';
import { useTheme } from '../../hooks';


interface props extends DialogHeadProps {
    variant?: 'classic' | 'default';
}

const DialogHead: FC<props> = ({
    variant = 'default',
    title,
    fScale = 'xl',
    fs,
    ff,
    containerStyle,
    titleStyle,
    children
}) => {
    const theme = useTheme();
    const STYLES = useMemo(Styles, []);

    const dynamicStyles = {
        borderBottomWidth: variant == 'default' ? 0.7 : 0,
        borderColor: theme?.colors.border.subtle,
        padding: verticalScale(variant === 'default' ? 16 : 25),
    };
    return (<>
        <View style={[STYLES.CONTAINER, dynamicStyles, containerStyle]}>
            <StyledText style={[STYLES.HEADER_TEXT, titleStyle]} fs={fs} ff={ff} fScale={fScale}>{title || children}</StyledText>
        </View>
    </>);
}
export default DialogHead;
export type { DialogHeadProps };


const Styles = () => StyleSheet.create({
    CONTAINER: {
        paddingBottom: verticalScale(16),
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    HEADER_TEXT: {
        fontWeight: 'bold',
    }
});
