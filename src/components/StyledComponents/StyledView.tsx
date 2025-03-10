import React from 'react';
import { View } from 'react-native';
import type { ViewStyle, ViewProps, DimensionValue, StyleProp } from "react-native";
import { useTheme } from '../../hooks';

type StyledViewProps = ViewStyle & ViewProps & {
    f?: number;
    justify?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
    align?: 'center' | 'flex-end' | 'flex-start' | 'stretch' | 'baseline';
    fWrap?: 'wrap' | 'nowrap' | 'wrap-reverse';
    bg?: string;
    themeBg?: boolean;
    h?: DimensionValue;
    w?: DimensionValue;
    children?: React.ReactNode;
    style?: StyleProp<ViewStyle>;
    [key: string]: any;
}

const StyledView: React.FC<StyledViewProps> = ({
    f,
    justify,
    align,
    fWrap,
    bg,
    themeBg,
    h,
    w,
    children,
    style,
    ...props
}) => {

    const theme: any = useTheme();

    return (<>
        <View
            style={[{
                flex: f,
                justifyContent: justify,
                alignItems: align,
                flexWrap: fWrap,
                backgroundColor: bg ?? (themeBg ? theme.colors.secondary : 'transparent'),
                height: h,
                width: w,
            },
                style
            ]}
            {...props}
        >
            {children}
        </View>
    </>);
};

export default StyledView;
export type { StyledViewProps };