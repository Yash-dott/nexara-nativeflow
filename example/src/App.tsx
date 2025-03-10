import { NativeProvider, StyledText, Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button, PortalProvider, StyledView, LightTheme, DarkTheme } from '@nexara/nativeflow';
import { useState } from 'react';
import { Text } from 'react-native';

export default function App() {

  const [isVisible, setIsVisible] = useState(false)
  return (
    <NativeProvider
      isResponsive={true}
      theme={{
        dark: { ...DarkTheme, colors: { ...DarkTheme.colors, primary: 'gray' } },
        light: { ...LightTheme },
      }}
    >
      <PortalProvider>
        <StyledView f={1} themeBg align='center' justify='center'>
          <StyledView w="100%">
            <Button
              onPress={() => setIsVisible(true)}
              fullWidth
            />
          </StyledView>

          <Text>Result: sdsdff</Text>
          <StyledText>asasdfs</StyledText>
          <Dialog isVisible={isVisible} size='lg' variant='classic' onClose={() => { setIsVisible(false) }}>
            <DialogHead title='Invite your team' />
            <DialogBody>
              <DialogDescription>
                Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.
              </DialogDescription>
            </DialogBody>
            <DialogFoot>
              <Button
                variant='outlined'
                title='Cancel'
                titleColor='#000'
                paddingV={10}
                paddingH={13}
              />
              <Button
                variant='contained'
                title='Explore'
                bg='#000'
                titleColor='#fff'
                paddingV={10}
                paddingH={13}
              />
            </DialogFoot>
          </Dialog>
        </StyledView >
      </PortalProvider>

    </NativeProvider>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//     backgroundColor: "#fff"
//   },
// });
