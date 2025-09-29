import { forwardRef } from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks';
import type { StyledViewProps } from '../../types';


const StyledView = forwardRef<View, StyledViewProps>(({
    f,
    justify,
    align,
    fWrap,
    bg,
    themeBg = false,
    h,
    w,
    children,
    style,
    ...rest
}, ref) => {

    const theme = useTheme();
    
    return (
        <View
            style={[{
                flex: f,
                justifyContent: justify,
                alignItems: align,
                flexWrap: fWrap,
                backgroundColor: bg ?? (themeBg ? theme?.colors.background.default : 'transparent'),
                height: h,
                width: w,
            },
                style
            ]}
            ref={ref}
            {...rest}
        >
            {children}
        </View>
    );
});

export default StyledView;
export type { StyledViewProps };