import type React from "react";
import { StyledText } from "../StyledComponents";
import { Linking, TouchableOpacity } from "react-native";
import { useCallback } from "react";


type props = {
    title: string;
    href: string;
}

const Link: React.FC<props> = ({
    title = '',
    href
}) => {
    const onUserPress = useCallback(async () => {
        const supported = await Linking.canOpenURL(href);
        if (supported) {
            await Linking.openURL(href);
        }
    }, []);
    return (<>
        <TouchableOpacity onPress={onUserPress}>
            <StyledText variant='h5' color='#0000FF'
                style={{ includeFontPadding: false, alignItems: 'baseline', borderBottomColor: '#0000FF', borderBottomWidth: 1, alignSelf: 'flex-start', padding: 0, margin: 0, lineHeight: undefined, flexShrink: 1, textAlignVertical: 'bottom', }}
            >{title}</StyledText>
        </TouchableOpacity>
    </>)
}

export default Link;