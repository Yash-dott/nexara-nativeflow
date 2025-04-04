# UserInput

**UserInput** components render a pre-styled input that can easily be re-style by using props.


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
import { UserInput, Icon } from 'rn-nativeflow';
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
}
export default Component;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | outlined, standard | standard |
| `label` | string |  | It sets the label of input
| `bg` | string | transparent | Sets background color of the UserInput
| `br` | number | 5 | Sets border radius of the UserInput
| `stroke` | number | 1 | Sets Border width of the UserInput
| `strokeColor` | string |  | Sets Border color of the UserInput
| `textColor` | string |  | Sets text color of the UserInput
| `placeholderTextColor` | string | gray | Sets placeholder text color of the UserInput
| `fs` | number | 12 | Sets font size of the UserInput
| `labelFs` | number | 12 | Sets label font size of the UserInput
| `titleFF` | string |  | Sets title font family of the button
| `cursorColor` | string |  | Sets the cursor color of the UserInput
| `placeholder` | string |  | Sets the placeholder of the UserInput
| `disabled` | boolean |  | It disable the UserInput when it set to true
| `multiline` | boolean |  | Enable multiline text when it set to true
| `numberOfLines` | number |  | By using this you can convert UserInput into text area and it works when multiline is set to true
| `isError` | boolean |  | It sets the danger color on the text and border of the UserInput to indicate that the user has entered input
| `helperText` | string |  | It helps to show a small helper error message when user entered wrong input and it shows when isError sets to true
| `renderLeftIcon` | JSX.Element |  | It render a icon on the left side of UserInput
| `renderRightIcon` | JSX.Element |  | It render a icon on the right side of UserInput
| `containerStyle` | object |  | Helps to change the styles of the main container
| `inputContStyle` | object |  | Helps to change the styles of the input container
| `inputContStyle` | object |  | Helps to change the styles of the input container
| `inputStyle` | object |  | Helps to change the styles of the input field
| `labelStyle` | object |  | Helps to change the styles of the input label
