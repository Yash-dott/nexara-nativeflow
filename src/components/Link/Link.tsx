import type React from "react";
import { StyledText } from "../StyledComponents";
import { Linking, StyleSheet, TouchableOpacity, type TextStyle } from "react-native";
import { useCallback } from "react";
import type { TypographyVariant } from "../../types";


type props = {
    title: string;
    href: string;
    textVariant?: TypographyVariant;
    style?: TextStyle
}

const Link: React.FC<props> = ({
    title = '',
    href,
    textVariant = 'h5',
    style
}) => {
    const onUserPress = useCallback(async () => {
        const supported = await Linking.canOpenURL(href);
        if (supported) {
            await Linking.openURL(href);
        }
    }, [href]);
    return (<>
        <TouchableOpacity onPress={onUserPress}>
            <StyledText
                variant={textVariant}
                color='#0000FF'
                style={[STYLES.TEXT, style]}
            >
                {title}
            </StyledText>
        </TouchableOpacity>
    </>)
}

export default Link;

const STYLES = StyleSheet.create({
    TEXT: {
        borderBottomColor: '#0000FF',
        borderBottomWidth: 0.8,
        alignSelf: 'flex-start',
    }
});