import React from 'react';
import { View } from 'react-native';
import type { ViewStyle, ViewProps, DimensionValue, StyleProp } from "react-native";
import { useTheme } from '../../hooks';

type StyledViewProps = ViewStyle & ViewProps & {
    f?: number;
    justify?: ViewStyle['justifyContent'];
    align?: ViewStyle['alignItems'];
    fWrap?: ViewStyle['flexWrap'];
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
    themeBg = false,
    h,
    w,
    children,
    style,
    ...rest
}) => {
    const theme = useTheme(themeBg);
    return (<>
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
            {...rest}
        >
            {children}
        </View>
    </>);
};

export default StyledView;
export type { StyledViewProps };