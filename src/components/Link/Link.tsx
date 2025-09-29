import { useCallback, type FC } from "react";
import { StyledText } from "../StyledComponents";
import { Linking, StyleSheet } from "react-native";
import type { LinkProps } from "../../types";


const Link: FC<LinkProps> = ({
    title = 'Link',
    href,
    style,
    ...rest
}) => {
    const onUserPress = useCallback(async () => {
        const supported = await Linking.canOpenURL(href);
        if (supported) {
            await Linking.openURL(href);
        }
    }, [href]);
    return (
        <StyledText
            color='#0000FF'
            style={[STYLES.TEXT, style]}
            onPress={onUserPress}
            {...rest}
        >
            {title}
        </StyledText>
    )
}

export default Link;

const STYLES = StyleSheet.create({
    TEXT: {
        // borderBottomColor: '#0000FF',
        // borderBottomWidth: 0.8,
        // alignSelf: 'flex-start',
    }
});