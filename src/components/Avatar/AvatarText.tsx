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
    size = 70,
    fs,
    text = 'YH',
    bg,
    containerStyle,
    textStyle,
}) => {
    text = text.slice(0, 2).toUpperCase();
    const theme: any = useTheme();

    return (<>
        <StyledView
            bg={bg ?? theme.colors.primary}
            // alignSelf='flex-start'
            h={verticalScale(size)}
            w={verticalScale(size)}
            align='center'
            justify='center'
            borderRadius={verticalScale(size)}
            style={containerStyle}
        >
            <StyledText secondary fw='bold' fs={fs ?? (size / 3)} style={textStyle}>{text}</StyledText>
        </StyledView>
    </>)
}
export default AvatarText;
export type { AvatarTextProps };