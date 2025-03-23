import { NativeProvider, useTheme,  StyledView,  LightTheme, DarkTheme, StyledText, PortalProvider,  } from "@nexara/nativeflow";
import {   ScrollView, Button as RNButton } from "react-native";
// import { ArrowRight, Camera, Copy, Download, EllipsisVertical, Eye, Share2, User, X } from "lucide-react-native";
import { memo } from "react";
// import { deviceScreenSizeCategory } from "../../src/helpers";


const RenderView = memo(() => {
    return (<>

        <StyledView align='center' justify='center' f={1} >
            <StyledText variant="h1">yash</StyledText>
        </StyledView>
    </>)
})

const Home = () => {

    const theme = useTheme();

    return (<>
        <RenderView />
        <RNButton title="button" onPress={() => theme?.toggleThemeMode()} />
    </>);
}
const App = () => {

    // const { width } = Dimensions.get('window');
    // console.log(width, "=====w=====")

    return (<>
        <NativeProvider theme={{
            // light: createTheme({...LightTheme.colors, primary: "green", secondary: "#FFF4E3" }),
            // dark: createTheme({ primary: "#ffffff", secondary: "#000000" })
            light: { ...LightTheme, colors: { ...LightTheme.colors, primary: 'green', secondary: '#fff', iconSecondary: '#fff' } },
            dark: { ...DarkTheme, colors: { ...DarkTheme.colors } }
        }}>
            <PortalProvider>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    <Home />
                </ScrollView>
            </PortalProvider>
        </NativeProvider>

    </>);
}
export default App;