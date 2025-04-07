# Check Box

**Check Box** component render a pre-styled checkbox that can easily be re-style by using props.


<img
  src={require('./img/checkbox.jpeg').default}
  alt="Example banner"
  style={{height:200}}
/>

## Implementation code

- **Internally controlled checkbox** 

```jsx
import { CheckBox } from '@nexara/nativeflow';

const Component = () => {
  return (
    <CheckBox
      text='CheckBox'
      defaultValue={true}
      onPress={(e)=>console.log(e)}
    />
  );
}
export default Component;
```


- **Externally controlled checkbox** 

```jsx
import {useState} from 'react';
import { CheckBox } from '@nexara/nativeflow';

const Component = () => {

  const [value, setValue] = useState(false);

  return (
    <CheckBox
      text='CheckBox'
      disableBuiltInState
      isChecked={value}
      onPress={(e)=>setValue(e)}
    />
  );
}
export default Component;
```
  ## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `square`, `round` | square |
| `isChecked` | boolean | false | It check the checkbox when `isChecked=true` and uncheck it when `isChecked=false`, It works when `disableBuiltInState=true`
| `defaultValue` | boolean | false | It sets the default value of checkbox when `disableBuiltInState=false`
| `activeBgColor` | string |  | It sets the background color of checkbox when checkbox is checked
| `inActiveBgColor` | string |  | It sets the background color of checkbox when checkbox is unchecked
| `iconColor` | string |  | It sets the color of check icon.
| `disableBuiltInState` | boolean | false | Checkbox control the state internally when `disableBuiltInState=false`
| `disabled` | boolean | false | It disable the checkbox and prevent user clicks
| `text` | string |  | It sets the text on the right side of the checkbox 
| `size` | number | 18 | It sets the size of the checkbox
| `iconSize` | number |  | when iconSize is not provided to the component then It change the icon size according to the size prop otherwise it will apply iconSize to the icon
| `containerStyle` | `ViewStyle` |  | Helps to change the styles of the checkbox main container
| `checkBoxStyle` | `ViewStyle` |  | Helps to change the text styles of the checkbox
| `textStyle` | `TextStyle` |  | Helps to change the text styles of the right text of checkbox
