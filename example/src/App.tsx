import { NativeProvider, useTheme, Button, StyledView, Icon, LightTheme, DarkTheme, CheckBox, Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, PortalProvider, Divider, StyledText, UserInput, Switch, Progress, } from "@nexara/nativeflow";
import { ScrollView, TouchableOpacity } from "react-native";
import { ArrowRight, Eye, PhoneCall, } from "lucide-react-native";
import { useEffect, useState } from "react";
import * as Font from 'expo-font';


const Home = () => {

    const theme = useTheme();
    const [isCheck, setIsCheck] = useState(false);
    const [percentage, setPercentage] = useState(10);

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
            });
        };

        loadFonts();
    }, []);

    useEffect(() => {
        const setIntervalref = setInterval(() => {
            setPercentage((prev) => prev < 100 ? prev + 10 : 0)
        }, 1000);
        return () => clearInterval(setIntervalref)
    }, []);

    return (<>
        <StyledView f={1} paddingHorizontal={20} paddingVertical={80} themeBg >

            <StyledView gap={25} w={"100%"}>
                <StyledText variant='h1' primary tas>Signin</StyledText>
                <StyledView gap={20}>

                    <StyledView gap={20}>
                        <UserInput
                            variant='outlined'
                            label="Mobile"
                            helperText="Please enter correct mobile number."
                            isError
                            renderLeftIcon={<Icon renderIcon={<PhoneCall color='gray' />} />}
                            styles={{
                                // input: { color: 'yellow' }
                            }}
                        />
                        <UserInput
                            variant='outlined'
                            label="Password"
                            secureTextEntry={isCheck}
                            disabled
                            renderRightIcon={<TouchableOpacity onPress={() => setIsCheck((prev) => !prev)}><Icon renderIcon={<Eye color='gray' />} /></TouchableOpacity>}
                        />
                        <Divider />
                        <UserInput
                            label="Password"
                            styles={{

                            }}
                        />
                        <UserInput
                            variant='outlined'
                            label="Password"
                            multiline
                            numberOfLines={50}
                        // renderLeftIcon={<Icon renderIcon={<PhoneCall color='gray' />} />}
                        />
                    </StyledView>

                    <CheckBox
                        text="Accept Terms & Conditions"
                        defaultValue={true}
                    />
                    <Button
                        onPress={() => theme?.toggleThemeMode()}
                        renderRightIcon={<Icon renderIcon={<ArrowRight size={17} color={"green"} />} />}
                        title="Login"
                        br={10}
                        fullWidth
                    />
                </StyledView>
                <Switch
                    color="green"
                    activeTrackColor='green'
                />
                <Progress
                    value={percentage}
                />




                {/* <Button
                type='round'
                renderIcon={<Icon renderIcon={<Copy size={20} />} />}
                onPress={() => theme.toggleThemeMode()}
                size={70}
            /> */}
            </StyledView>

        </StyledView>



        <Dialog isVisible={isCheck} size='lg' variant='classic' onClose={() => { setIsCheck(false) }}>
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
                    paddingV={12}
                    paddingH={14}
                />
                <Button
                    variant='contained'
                    title='Explore'
                    bg='#000'
                    titleColor='#fff'
                    paddingV={12}
                    paddingH={14}
                />
            </DialogFoot>
        </Dialog>
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
            dark: { ...DarkTheme, colors: { ...DarkTheme.colors, secondary: '#121212' } }
        }}>
            <PortalProvider>
                <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                    {/* {console.log(verticalScale(14))} */}
                    <Home />
                </ScrollView>
            </PortalProvider>
        </NativeProvider>

    </>);
}
export default App;