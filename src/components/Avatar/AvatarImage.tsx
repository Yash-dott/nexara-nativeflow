import { type FC } from "react";
import { Image } from "react-native";
import { StyledView } from "../StyledComponents";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import type { AvatarImageProps } from "../../types";


const AvatarImage: FC<AvatarImageProps> = ({
    size = 70,
    source,
    resizeMode = 'cover',
    containerStyle,
    imageStyle
}) => {

    return (<>
        <StyledView
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