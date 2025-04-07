# Dialog

Classic variant
<img
  src={require('./img/Dialog-classic.jpeg').default}
  alt="Example banner"
  style={{height:200}}
/>

Default variant
<img
  src={require('./img/Dialog-default.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>

## Implementation code

Wrap your app.js code with PortalProvider component to use dialog.

```jsx
import { PortalProvider, NativeProvider } from '@nexara/nativeflow';
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

- ### Classic variant

```jsx
import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from '@nexara/nativeflow';

const Component = () => {

    const dialogRef = useRef<DialogRefProps>(null);

    return (
        <Button
            title='Cancel'
            onPress={()=> dialogRef.current.open()}
        />
        <Dialog ref={dialogRef} size='lg' variant='classic' onClose={() => {}}>
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
    );
}
export default Component;
```

- ### Default variant

```jsx
import { Dialog, DialogHead, DialogBody, DialogDescription, DialogFoot, Button } from '@nexara/nativeflow';

const Component = () => {
    
    const dialogRef = useRef<DialogRefProps>(null);

    return (
        <Button
            title='Cancel'
            onPress={()=> dialogRef.current.open()}
        />
        <Dialog ref={dialogRef} onClose={() => {}} >
            <DialogHead title='Contact US' />
            <DialogBody >
                <UserInput
                    cursorColor='#000'
                    textColor='#000'
                    label='Password'
                    variant='outlined'
                />
                <UserInput
                    cursorColor='#000'
                    textColor='#000'
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
                    title='Save'
                    bg='#000'
                    titleColor='#fff'
                    paddingV={10}
                    paddingH={13}
                />
            </DialogFoot>
        </Dialog>
    );
}
export default Component;
```

## Props

- ### Dialog Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `default`, `classic` | `default` | It sets the variant of the dialog |
| `size` | `xs`, `sm`, `md`, `lg`, `full` | `lg` | It sets the horizontal size of the dialog |
| `fullScreen` | boolean | false | Dialog covers full screen when `fullScreen` is set to `true` |
| `backdropColor` | string | 'rgba(0, 0, 0, 0.5)' | It sets the backdrop color of the dialog |
| `onClose` | function |  | It fires when the user clicks on the backdrop or tries to close the dialog.|
| `containerStyle` | `ViewStyle` |  | Helps to change the styles of the dialog container |
| `ref` | ref |  | Used to programmatically control the dialog |

- ### Dialog Ref Methods

| Method | Description |
|---|---|
| `open()` | Opens the dialog programmatically |
| `close()` | Closes the dialog programmatically |

- ### Dialog Head Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `title` | string |  | It sets the title of the dialog |
| `textVariant` | `h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`h7` | `h4` | Determines the text variant applied to the title |
| `fs` | number |  | Sets the font size of the title |
| `textStyle` | `TextStyle` |  | Helps to change the styles of the dialog Head title |
| `containerStyle` | `ViewStyle` |  | Helps to change the styles of the dialog Head container |
<!-- | `variant` | `default`, `classic` | `default` | Determines the visual style of the Dialog Head | -->


- ### Dialog Body Props

| Prop           | Type      | Default | Description                                                            |
|----------------|-----------|---------|------------------------------------------------------------------------|
| `scrollEnable` | boolean   | `true`  | Enables scrolling when content overflows from the parent               |
| `containerStyle` | `ViewStyle`  |         | Helps to change the styles of the Dialog Body container                |
<!-- | `variant`      | `default`, `classic` | `default` | Determines the visual style of the Dialog Body                        | -->

- ### Dialog Description Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `fs` | number |  | Sets the font size of the description text |
| `textVariant` | `h1`,`h2`,`h3`,`h4`,`h5`,`h6`,`h7` | `h5` | Determines the text variant applied to the description |
| `containerStyle` | `ViewStyle` |  | Helps to change the styles of the dialog description container |
| `textStyle` | `TextStyle` |  | Helps to change the styles of the dialog description text |

- ### Dialog Foot Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `containerStyle` | `ViewStyle` |  | Helps to change the styles of the dialog foot container |
<!-- | `children` | ReactNode |  | The content inside the Dialog Foot | -->
<!-- | `variant` | `default`, `classic` | `default` | Determines the visual style of the Dialog Foot | -->

