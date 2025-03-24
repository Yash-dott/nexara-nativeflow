import React from "react";
import { Image } from "react-native";
import { StyledView } from "../StyledComponents";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";
import type { AvatarImageProps } from "../../types";


const AvatarImage: React.FC<AvatarImageProps> = ({
    size = 70,
    source,
    bg,
    resizeMode = 'cover',
    containerStyle,
    imageStyle
}) => {

    const theme: any = useTheme();

    return (<>
        <StyledView
            backgroundColor={bg ?? theme.colors.primary}
            // alignSelf='flex-start'
            height={verticalScale(size)}
            width={verticalScale(size)}
            borderRadius={verticalScale(size)}
            overflow='hidden'
            style={containerStyle}
        >
            <Image
                source={source}
                style={[{ height: '100%', width: '100%' }, imageStyle]}
                resizeMode={resizeMode}
            />
        </StyledView>
    </>)
}
export default AvatarImage;
export type { AvatarImageProps };