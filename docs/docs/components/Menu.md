# Menu

<img
  src={require('./img/menu.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>

## Implementation code



Wrap your app.js code with PortalProvider component to use menu.

```jsx
import { PortalProvider, NativeProvider } from 'rn-nativeflow';
import Component from './path';

const App = () => {
    return (
        <NativeProvider>
            <PortalProvider>
                <Component/>
            </PortalProvider>
        </NativeProvider>
    )
}
export default App;
```


- **Internally controlled checkbox**

```jsx
import { Menu, MenuItem, MenuItemLabel, Divider } from 'rn-nativeflow';
import { EllipsisVertical, Share2, User, Download, Eye } from 'lucide-react-native';

const Component = () => {
  return (
        <Menu
            anchor={<EllipsisVertical color='#000' size={moderateScale(22)} />}
            onSelect={(e) => console.log('select', e)}
            placement='top'
        >
            <MenuItem name='Share' onPress={() => console.log("okk")}>
                <Share2 color='#000' size={moderateScale(17)} />
                <MenuItemLabel>
                    Share
                </MenuItemLabel>
            </MenuItem>
            <Divider/>
            <MenuItem name='Profile'>
                <User color='#000' size={moderateScale(17)} />
                <MenuItemLabel>
                    Profile
                </MenuItemLabel>
            </MenuItem>

            <MenuItem name='Download'>
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
    );
}
export default Component;
```

- **Externally controlled checkbox**

```jsx
import React,{ useState } from 'react';
import { Menu, MenuItem, MenuItemLabel, Divider } from 'rn-nativeflow';
import { EllipsisVertical, Share2, User, Download, Eye } from 'lucide-react-native';

const Component = () => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Menu
            anchor={<EllipsisVertical color='#000' size={moderateScale(22)} />}
            onSelect={(e) => console.log('select', e)}
            placement='top'
            disableBuiltInState
            isOpen={isOpen}
            onRequestOpen={() => useState(true)}
            onRequestClose={() => useState(false)}
        >
            <MenuItem name='Share' onPress={() => console.log("okk")}>
                <Share2 color='#000' size={moderateScale(17)} />
                <MenuItemLabel>
                    Share
                </MenuItemLabel>
            </MenuItem>
            <Divider/>
            <MenuItem name='Profile'>
                <User color='#000' size={moderateScale(17)} />
                <MenuItemLabel>
                    Profile
                </MenuItemLabel>
            </MenuItem>

            <MenuItem name='Download'>
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
    );
}
export default Component;
```

## Props

- **Menu Props** 

| Prop | Type | Default | Description |
|---|---|---|---|
| `placement` | top, bottom | top | It sets the menu starting point relative to anchor
| `anchor` | JSX.Element |  | It render the anchor to open the menu from
| `disableBuiltInState` |  boolean | false | Menu control the state of visibility internally when `disableBuiltInState=false`
| `isOpen` | boolean | false | It change visibility of the menu on passing true or false but it only work when `disableBuiltInState=true`
| `onRequestOpen` | function |  | It fired when user try to open the menu
| `onRequestClose` | function |  | It fired when user try to close the menu
| `onSelect` | function |  | It fired when user click on any `menuItem` and it gives the value of name prop of menu item
| `style` | object |  |  Helps to change the styles of the menu container


- **Menu Item Props** 

| Prop | Type | Default | Description |
|---|---|---|---|
| `paddingV` | number | 12 | It sets the padding vertically on the menuItem
| `paddingH` | number | 15 |  It sets the padding horizontally on the menuItem
| `gap` | number | 10 | It sets the gap between the children of the menuItem
| `style` | object |  | Helps to change the styles of the menuItem container


- **Menu Item Label Props** 

| Prop | Type | Default | Description |
|---|---|---|---|
| `fs` | number | 12 | Helps to change the font size of the MenuItemLabel
| `style` | object |  | Helps to change the styles of the MenuItemLabel