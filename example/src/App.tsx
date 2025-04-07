import { NativeProvider, useTheme, Button, StyledView,  LightTheme, DarkTheme, CheckBox, Dialog, DialogHead, DialogBody, DialogFoot, PortalProvider, Divider, StyledText, UserInput, Switch, Progress, Link, Chip, Stack, } from "@nexara/nativeflow";
import { ScrollView,} from "react-native";
// import { ArrowRight, Eye, PhoneCall, } from "lucide-react-native";
import { useEffect, useRef } from "react";
import * as Font from 'expo-font';
import type { DialogRefProps } from "../../src/types";


const Home = () => {

    const theme = useTheme();
    // const [isCheck, setIsCheck] = useState(false);
    // const [percentage, setPercentage] = useState(10);
    // const [dialog1, setDialog1] = useState(false);
    // const [dialog2, setDialog2] = useState(false);
    // const dialogRef1 = useRef<DialogRefProps>(null);
    const dialogRef2 = useRef<DialogRefProps>(null);


    useEffect(() => {
        console.log(dialogRef2)
    }, [dialogRef2.current])

    useEffect(() => {
        const loadFonts = async () => {
            await Font.loadAsync({
                'Poppins-Regular': require('../assets/fonts/Poppins-Regular.ttf'),
            });
        };

        loadFonts();
    }, []);

    // useEffect(() => {
    //     const setIntervalref = setInterval(() => {
    //         setPercentage((prev) => prev < 100 ? prev + 10 : 0)
    //     }, 1000);
    //     return () => clearInterval(setIntervalref)
    // }, []);

    return (<>

        <StyledView f={1} paddingHorizontal={20} paddingVertical={80}  >
            <Stack.H themeBg>
                <StyledText variant='h1' primary tas>Signin</StyledText>
                <StyledText variant='h1' primary tas>Signin</StyledText>
            </Stack.H>
            <StyledView gap={25} w={"100%"}>
                <StyledText variant='h1' primary tas>Signin</StyledText>
                <StyledView gap={20}>

                    <StyledView gap={20}>
                        <UserInput

                            variant='outlined'
                            label="Mobile"
                            helperText="Please enter correct mobile number."
                            isError
                            // renderLeftIcon={<Icon renderIcon={<PhoneCall color='gray' />} />}
                            styles={{
                                // input: { color: 'yellow' }
                            }}
                        />
                        <UserInput
                            variant='outlined'
                            label="Password"
                            // secureTextEntry={isCheck}
                            disabled
                        // renderRightIcon={<TouchableOpacity onPress={() => setIsCheck((prev) => !prev)}><Icon renderIcon={<Eye color='gray' />} /></TouchableOpacity>}
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
                        onPress={(e) => console.log(e)}
                    />
                    <Chip
                        title="Delete"
                    // renderRightIcon={<Icon renderIcon={<Trash2 />} />}
                    // renderLeftIcon={<Icon renderIcon={<Trash2 />} />}
                    // bg="red"
                    // disabled
                    />
                    <Button
                        // onPress={() => inputRef?.current?.open()}
                        onPress={() => theme?.toggleThemeMode()}
                        // onPress={() => dialogRef1.current?.open()}
                        // renderRightIcon={<Icon renderIcon={<ArrowRight size={17} color={"green"} />} />}
                        title="Login"
                        br={10}
                        fullWidth
                    // ref
                    />
                    <Button
                        // onPress={() => inputRef?.current?.open()}
                        // onPress={() => setDialog2(true)}
                        onPress={() => dialogRef2.current?.open()}
                        // renderRightIcon={<Icon renderIcon={<ArrowRight size={17} color={"green"} />} />}
                        title="Login"
                        br={10}
                        fullWidth
                    // refj
                    />
                    <Link title="Link" href="https://docs.nativebase.io/link" />

                </StyledView>
                <Switch
                />
                <Progress
                    value={50}
                />




                {/* <Button
                type='round'
                renderIcon={<Icon renderIcon={<Copy size={20} />} />}
                onPress={() => theme.toggleThemeMode()}
                size={70}
            /> */}
            </StyledView>

            <Button type='round' />
        </StyledView>



        {/* <Dialog ref={dialogRef1} size='lg' variant='classic' onClose={() => { }}>
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
        </Dialog> */}
        <Dialog ref={dialogRef2} size='lg' variant='default' onClose={() => { }} >
            <DialogHead title='Invite your team' />
            <DialogBody  >
                <UserInput
                    cursorColor='#000'
                    inputTextColor='#000'
                    label='Password'
                    variant='outlined'
                />
                <UserInput
                    cursorColor='#000'
                    inputTextColor='#000'
                    label='Password'
                    variant='outlined'
                />
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
            light: { ...LightTheme, colors: { ...LightTheme.colors, primary: '#008000', secondary: '#fff', iconSecondary: '#fff' } },
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