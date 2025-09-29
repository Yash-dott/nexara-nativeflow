import { useRef } from 'react';
import { useFonts } from "expo-font";
import { Switch, Dialog, DialogBody, DialogDescription, DialogFoot, DialogHead, NativeProvider, StyledView, StyledText, PortalProvider, Button, UserInput, Avatar, CheckBox, Surface, Stack, Progress, Link, Divider, Menu, MenuItem, MenuItemLabel, Icon, Chip, Radio } from '@nexara/nativeflow';
import { ScrollView, StatusBar } from 'react-native';
import { ArrowRight, Calendar, Camera, Download, EllipsisVertical, Eye, PenOff, Share2, User } from 'lucide-react-native';
import IconButton from '../../src/components/IconButton/IconButton';
import Grid from '../../src/components/Grid/Grid';
import type { DialogRefProps } from '../../src/types';


const Text = () => {

    const dialogRef = useRef<DialogRefProps>(null);

    return (<>
        <StyledView f={1} justify='center' padding={20} gap={20} themeBg paddingBottom={50}>
            <StyledText fScale='xxs'>Yash kumar jha xxs</StyledText>
            <StyledText fScale='xs'>Yash kumar jha xs</StyledText>
            <StyledText fScale='sm'>Yash kumar jha sm</StyledText>
            <StyledText fScale='base'>Yash kumar jha base</StyledText>
            <StyledText fScale='lg' variant='secondary'>Yash kumar jha</StyledText>
            <StyledText fScale='xl' variant='tertiary'>Yash kumar jha</StyledText>
            <StyledText fScale='2xl' variant='disabled'>Yash kumar jha</StyledText>
            <StyledText fScale='3xl' variant='disabled'>Yash kumar jha</StyledText>
            <StyledText fScale='4xl' variant='disabled'>Yash kumar jha</StyledText>
            <Button title='submit' fullWidth renderLeftIcon={<PenOff size={17} />} renderRightIcon={<PenOff size={17} />} />
            <Button title='submit' fullWidth />
            <Button
                title='Open'
                fullWidth
                renderRightIcon={<Icon renderIcon={<ArrowRight size={17} color='white' />} />}
                onPress={() => console.log('Button clicked!')}
            />
            <CheckBox
                label='CheckBox'
                disableBuiltInState
                isChecked={true}
                onPress={(e) => console.log(e)}
            />
            <Button title='submit' type='round' renderIcon={<Camera size={17} />} />

            <Stack.H gap={20}>
                <Button title='Signup free' variant='outlined' renderRightIcon={<ArrowRight size={17} />} />
                <Button variant='contained' renderIcon={<Camera size={17} />} ></Button>
                <Button variant='outlined' renderIcon={<Camera size={17} />} ></Button>
                <Button variant='outlined' renderIcon={<Camera size={17} />} ></Button>

            </Stack.H>
            <Button title='submit' disabled fullWidth renderLeftIcon={<PenOff />} renderRightIcon={<PenOff />} />
            <UserInput
                renderLeftIcon={<User color='gray' size={17} />}
                variant='outlined'
                helperText='Enter your correct email address'
                label='Email'
                isError
            />
            <UserInput
                variant='outlined'
                helperText='Enter your correct email address'
                label='Email'
                multiline
            />
            <UserInput
                helperText='Enter your correct email address'
                label='Email'
            />
            <Avatar.Image source={{ uri: 'https://i.pinimg.com/736x/63/f6/39/63f6391faa4c52309bbe8819ff32fa85.jpg' }} />
            <Avatar.Text size={90} text='yash' />
            <Stack.V align='center' >

                <Menu
                    anchor={<IconButton>
                        <EllipsisVertical size={20} />
                    </IconButton>}
                    onSelect={(e) => console.log('select', e)}
                    placement='top'
                >
                    <MenuItem name='Share' onPress={() => console.log("okk")}>
                        <Share2 color='#000' size={17} />
                        <MenuItemLabel>
                            Share
                        </MenuItemLabel>
                    </MenuItem>
                    <Divider />
                    <MenuItem name='Profile'>
                        <User color='#000' size={17} />
                        <MenuItemLabel>
                            Profile
                        </MenuItemLabel>
                    </MenuItem>

                    <MenuItem name='Download'>
                        <Download color='#000' size={17} />
                        <MenuItemLabel>
                            Download
                        </MenuItemLabel>
                    </MenuItem>

                    <MenuItem name='View'>
                        <Eye color='#000' size={17} />
                        <MenuItemLabel>
                            View
                        </MenuItemLabel>
                    </MenuItem>
                </Menu>
            </Stack.V>
            <Chip renderLeftIcon={<Icon renderIcon={<Camera size={14} />} />} />

            <Surface>
                <Stack.H >
                    <CheckBox
                        label='Terms & Conditions'
                    />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                    <Switch checked={true} />
                </Stack.H>
                <Stack.V >
                    <CheckBox
                        variant='round'
                        label='Terms & Conditions'
                    />
                    <Switch checked={true} />
                    <Progress value={50} />
                    <Divider />
                    <StyledText style={{ alignItems: 'center', marginBottom: 20 }}>
                        shfvahdbajkdb
                        <Link color='red' title='Google' href='https://www.google.com' />
                    </StyledText>
                </Stack.V>
                <Grid container >
                    <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'green' }} xs={4} md={12} >
                        <StyledText>Item 1 xs={4}</StyledText>
                    </Grid>
                    <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'gray', height: 100 }} xs={4} md={6} >
                        <StyledText >Item 2 xs={4}</StyledText>
                    </Grid>
                    <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'blue', height: 100 }} xs={4} md={6}>
                        <StyledText >Item 3 xs={4}</StyledText>
                    </Grid>
                    <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'red', height: 100 }} xs={12} md={6} >
                        <StyledText >Item 4 xs={12}</StyledText>
                    </Grid>
                </Grid>

                <Button
                    title='Cancel'
                    onPress={() => dialogRef?.current?.open()}
                />
                <Dialog ref={dialogRef} size='lg' variant='default' onClose={() => { }}>
                    <DialogHead >Create an Account</DialogHead>
                    <DialogBody gap={10}  >
                        <UserInput
                            label='Name'
                        />
                        <UserInput
                            label='Password'
                        />
                        <DialogDescription textStyle={{ fontStyle: 'italic' }}>
                            Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms, and media displays. Make an impact effortlessly.
                        </DialogDescription>
                    </DialogBody>
                    <DialogFoot >
                        <Button
                            variant='outlined'
                            title='Cancel'
                            paddingV={10}
                            fScale='sm'
                            stroke={0}
                        />
                        <Button
                            variant='outlined'
                            title='Explore'
                            paddingV={10}
                            fScale='sm'
                            stroke={0}
                        />
                    </DialogFoot>
                </Dialog>
                <Stack.H marginTop={20}>
                    <Chip renderLeftIcon={<Calendar color='#000' size={14} />} />
                    <Radio.Group defaultValue='others' name='Gender'
                        onSelect={(name, value) => console.log(name, value)}
                    >
                        <Radio.Item value='male' label='Male' onPress={() => console.log("pressed")} />
                        <Radio.Item value='female' label='Female' />
                        <Radio.Item name='Others' value='others' label='Others' onPress={() => console.log("pressed1")} />
                    </Radio.Group>
                </Stack.H>
            </Surface>
        </StyledView>
    </>)


}
const App = () => {

    const [fontsLoaded] = useFonts({
        PoppinsRegular: require("../assets/fonts/Poppins-Regular.ttf"),
        test: require("../assets/fonts/ImperialScript-Regular.ttf"),
    });


    if (!fontsLoaded) {
        return < StyledView f={1} bg='red'></StyledView>
    }
    return (<>
        <StatusBar
            animated={true}
            hidden
        />
        <NativeProvider
            options={{
                scalingMode: 'partial',
                defaultTheme: 'light'
            }}
        >
            <PortalProvider>
                <ScrollView style={{ flex: 1 }}>
                    <Text />
                </ScrollView>
            </PortalProvider>
        </NativeProvider>
    </>);
}



export default App;