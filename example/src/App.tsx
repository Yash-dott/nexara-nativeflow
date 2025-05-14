import { NativeProvider, LightTheme, DarkTheme, StyledView, StyledText, Icon, useTheme,  PortalProvider, Button } from '@nexara/nativeflow';
import { StatusBar } from 'react-native';
import {  PenOff, } from 'lucide-react-native';



const Text = () => {
 
    return (<>
        <StyledView f={1} align='center' justify='center' themeBg flexDirection='column'>
            <StyledText ff='Inter-Black' backgroundColor='red'>alksnda</StyledText>
            <StyledView>
                <Button
                    renderRightIcon={<Icon color='red' renderIcon={<PenOff />} />}
                />
            </StyledView>
      
        </StyledView>
    </>)
}
const App = () => {

    return (<>
        <StatusBar
            animated={true}
            hidden
        />
        <NativeProvider
            options={{
                defaultTheme: 'light'
            }}
            theme={{
                light: { ...LightTheme, colors: { ...LightTheme.colors, primary: '#edff8c' } },
                dark: { ...DarkTheme, colors: { ...DarkTheme.colors, secondary: '#000', primary: '#edff8c' } }
            }}
        >
            <PortalProvider>
                <Text />
            </PortalProvider>
        </NativeProvider>
    </>);
}

export default App;