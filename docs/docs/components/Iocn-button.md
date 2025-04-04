

# Icon button

**IconButton** render a Icon with button properties 


<img
  src={require('./img/checkbox.jpeg').default}
  alt="Example banner"
  style={{height:200}}
/>

## Implementation code

```jsx
import { IconButton, Icon } from 'rn-nativeflow';
import { Camera } from 'lucide-react-native';

const Component = () => {
  return (
    <IconButton onPress={() => console.log("IconButton Pressed")} >
      <Icon renderIcon={<Camera size={30} color="#000" />} />
    </IconButton>

  );
}
export default Component;
```


| Prop | Type | Default | Description |
|---|---|---|---|
| `rippleColor` | string |  | It sets the ripple color of the IconButton when anyone press it

