

# Icon 

**Icon** is a component which receives a icon from prop sets the size of icon according to screen size.


<img
  src={require('./img/checkbox.jpeg').default}
  alt="Example banner"
  style={{height:200}}
/>

## Implementation code

```jsx
import { Icon } from 'rn-nativeflow';
import { Check } from 'lucide-react-native';

const Component = () => {
  return (
    <Icon renderIcon={<Check color='#000' size={16} />} />
  );
}
export default Component;
```


| Prop | Type | Default | Description |
|---|---|---|---|
| `renderIcon` | JSX.Element |  | It receives a icon and modify size prop on the basis of screen size

