import React from 'react';
import { View } from 'react-native';
import { useTheme } from '../../hooks';
import type { StyledViewProps } from '../../types';


const StyledView: React.FC<StyledViewProps> = ({
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
    ref,
    ...rest
}) => {

    const theme = useTheme(themeBg);

    return (
        <View
            style={[{
                flex: f,
                justifyContent: justify,
                alignItems: align,
                flexWrap: fWrap,
                backgroundColor: bg ?? (themeBg ? theme?.colors.secondary : 'transparent'),
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
};

export default StyledView;
export type { StyledViewProps };