# UserInput

**UserInput** components render a pre-styled input that can easily be re-styled by using props.

<img
  src={require('./img/user-input-light.jpeg').default}
  alt="Example banner"
  style={{height:400}}
/>
<img
  src={require('./img/user-input-dark.jpeg').default}
  alt="Example banner"
  style={{height:400}}
/>


## Implementation code

```jsx
import { UserInput, Icon } from '@nexara/nativeflow';
import { Phone } from 'lucide-react-native';

const Component = () => {
  return (
    <UserInput
      variant='outlined'
      label='Mobile'
      placeholder='Enter your mobile number...'
      helperText='Invalid mobile number'
      isError={false}
      renderLeftIcon={<Icon renderIcon={<Phone color="gray" size={17} />} />}
      onChangeText={(e) => console.log(e)}
    />
  );
};
export default Component;
```


## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"outlined"` \| `"standard"` | `"standard"` | Sets the style of the input border |
| `label` | `string` | – | Sets the label of the input |
| `bg` | `string` | `theme.colors.inputBgColor` | Background color of the input |
| `br` | `number` | `10` | Border radius of the input |
| `stroke` | `number` | `1` | Border width of the input |
| `strokeColor` | `string` | – | Border color of the input |
| `labelColor` | `string` | – | Custom label color |
| `textVariant` | `{ label: string; helperText: string }` | `{ label: 'h5', helperText: 'h6' }` | Text style variants for label and helper text |
| `inputTextColor` | `string` | – | Text color for the input field |
| `cursorColor` | `string` | – | Cursor color in the input |
| `placeholderColor` | `string` | – | Placeholder text color |
| `inputFs` | `number` | `13` | Font size of input text |
| `labelFs` | `number` | – | Font size of label text |
| `helperTextFS` | `number` | – | Font size of helper text |
| `placeholder` | `string` | `"Please enter..."` | Placeholder text for the input |
| `disabled` | `boolean` | `false` | Disables the input field |
| `isError` | `boolean` | `false` | Marks input as invalid (shows error styling) |
| `helperText` | `string` | `""` | Error or helper message |
| `multiline` | `boolean` | `false` | Enables multiline input |
| `renderLeftIcon` | `JSX.Element` | – | Renders an icon to the left of the input |
| `renderRightIcon` | `JSX.Element` | – | Renders an icon to the right of the input |
| `styles` | `{ mainContainer?, label?, inputContainer?, input?, helperText? }` | – | Override styles for various sub-elements |


