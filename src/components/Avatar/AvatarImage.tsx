import React from "react";
import { Image } from "react-native";
import type { ImageStyle, StyleProp, ViewStyle } from "react-native";
import { StyledView } from "../StyledComponents";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";


type AvatarImageProps = {
    size?: number;
    source?: object;
    bg?: string;
    containerStyle?: StyleProp<ViewStyle>;
    imageStyle?: StyleProp<ImageStyle>;
}

const AvatarImage: React.FC<AvatarImageProps> = ({
    size = 60,
    source,
    bg,
    containerStyle,
    imageStyle
}) => {

    const theme: any = useTheme();

    return (<>
        <StyledView
            backgroundColor={bg ?? theme.colors.primary}
            alignSelf='flex-start'
            height={verticalScale(size)}
            width={verticalScale(size)}
            borderRadius={verticalScale(50)}
            overflow='hidden'
            style={containerStyle}
        >
            <Image
                source={source}
                style={[{ height: '100%', width: '100%' }, imageStyle]}
                resizeMode='cover'
            />
        </StyledView>
    </>)
}
export default AvatarImage;
export type { AvatarImageProps };