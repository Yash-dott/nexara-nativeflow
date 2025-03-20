import { NativeProvider, useTheme, Button, StyledView, Icon, LightTheme, DarkTheme, IconButton, Avatar, CheckBox, Chip, Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, PortalProvider, Divider, Menu, MenuItem, MenuItemLabel, moderateScale, StyledText, } from "@nexara/nativeflow";
import { Dimensions, ScrollView } from "react-native";
import { Camera, Copy, Download, EllipsisVertical, Eye, Share2, User } from "lucide-react-native";
import { useState } from "react";

const Home = () => {

    const theme = useTheme();
    const [isCheck, setIsCheck] = useState(false)
    return (<>
        <StyledView f={1} justify='center' align='center' paddingHorizontal={20} themeBg>

            <StyledView gap={50} w={"100%"}>
                <StyledText variant='h1'>Yash Kumar Jha</StyledText>

                <Button
                    onPress={() => theme.toggleThemeMode()}
                    renderLeftIcon={<Icon renderIcon={<Copy size={15} />} />}
                    renderRightIcon={<Icon renderIcon={<Copy size={15} color={"green"} />} />}
                    title="Copy Text"
                    br={20}
                    fullWidth
                // disabled
                />
                <StyledView themeBg>
                    <Icon renderIcon={<Copy size={20} />} />
                </StyledView>

                <IconButton onPress={() => console.log("IconButton Pressed")} >
                    <Icon renderIcon={<Camera size={30} color="#000" />} />
                </IconButton>

                <StyledView flexDirection='row' gap={10}>

                    <Avatar.Text
                        size={60}
                        text="tari"
                    />
                    <Avatar.Image
                        size={70}
                        source={{ uri: 'https://mastdp.com/img/cute-dp-for-girls/cute-girls-pictures-downloads.webp' }}
                    />
                </StyledView>

                <Menu
                    anchor={<IconButton  ><EllipsisVertical size={17} /></IconButton>}
                    // anchor={<EllipsisVertical  size={moderateScale(22)} />}
                    onSelect={(e) => console.log('select', e)}
                    placement='top'
                // onRequestOpen={() => setIsOpenMenu(true)}
                // onRequestClose={() => setIsOpenMenu(false)}
                // disableBuiltInState
                // isOpen={isMenuOpen}
                >
                    <MenuItem name='Share' onPress={() => console.log("okk")}>
                        <Share2 color='#000' size={moderateScale(17)} />
                        <MenuItemLabel >
                            Share
                        </MenuItemLabel>
                    </MenuItem>
                    {/* <Divider /> */}
                    <MenuItem name='Profile'>
                        <User color='#000' size={moderateScale(17)} />
                        <MenuItemLabel>
                            Profile
                        </MenuItemLabel>
                    </MenuItem>

                    <MenuItem name='Download'>
                        {/* <StyledView flexShrink={0}>
                            <Download color='#000' size={moderateScale(17)} />
                        </StyledView> */}
                        <Download color='#000' size={moderateScale(17)} />
                        <MenuItemLabel>
                            Download
                        </MenuItemLabel>
                    </MenuItem>

                    <MenuItem name='View'>
                        <Eye color='#000' size={moderateScale(17)} />
                        <MenuItemLabel>
                            View
                        </MenuItemLabel>
                    </MenuItem>
                </Menu>
                <StyledView flexDirection='row' gap={10} w={"100%"} >

                    <CheckBox
                        text="click me!"
                        isChecked={isCheck}
                        variant='round'
                        onPress={(e) => setIsCheck(e)}
                        disableBuiltInState
                    />
                    <CheckBox
                        text="click me!"
                        defaultValue={true}
                    />
                </StyledView>

                <StyledView gap={10} w={"100%"} >

                    <Chip
                        title="Delete"
                    // disabled
                    />
                    <Divider />
                    <Chip
                        title="Delete"
                        variant='outlined'
                    // bg="red"
                    />

                </StyledView>


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
    </>);
}
const App = () => {

    const { width } = Dimensions.get('window');
    console.log(width, "=====w=====")

    return (<>
        <NativeProvider theme={{
            light: { ...LightTheme, colors: { ...LightTheme.colors, primary: '#FFA45C', secondary: '#FFF4E3', iconSecondary: '#fff' } },
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