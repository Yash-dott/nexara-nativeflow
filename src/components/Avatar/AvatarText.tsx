import React from "react";
import type { ViewStyle, TextStyle, StyleProp } from "react-native";
import { StyledText, StyledView } from "../StyledComponents";
import { verticalScale } from "../../helpers/ResponsiveCalculations";
import { useTheme } from "../../hooks";


type AvatarTextProps = {
    size?: number;
    fs?: number;
    text?: string;
    bg?: string;
    containerStyle?: StyleProp<ViewStyle>;
    textStyle?: StyleProp<TextStyle>;
}

const AvatarText: React.FC<AvatarTextProps> = ({
    size = 60,
    fs = 16,
    text = 'YH',
    bg,
    containerStyle,
    textStyle,
}) => {
    text = text.slice(0, 2).toUpperCase();
    const theme: any = useTheme();

    return (<>
        <StyledView
            backgroundColor={bg ?? theme.colors.primary}
            alignSelf='flex-start'
            height={verticalScale(size)}
            width={verticalScale(size)}
            align='center'
            justify='center'
            borderRadius={verticalScale(50)}
            style={containerStyle}
        >
            <StyledText secondary fw='bold' fs={fs} style={textStyle}>{text}</StyledText>
        </StyledView>
    </>)
}
export default AvatarText;
export type { AvatarTextProps };