

# Icon 

**Icon** is a component which receives a icon from prop sets the size of icon according to screen size.


<img
  src={require('./img/checkbox.jpeg').default}
  alt="Example banner"
  style={{height:200}}
/>

## Implementation code

```jsx
import { Icon } from '@nexara/nativeflow';
import { Check } from 'lucide-react-native';

const Component = () => {
  return (
    <Icon renderIcon={<Check color='#000' size={16} />} />
  );
}
export default Component;
```


## Props

| Prop         | Type         | Default | Description                                                                 |
|--------------|--------------|---------|-----------------------------------------------------------------------------|
| `color`      | `string`     |         | Optional override color for the icon. If not provided, it uses the color from the theme or the icon’s own color prop. |
| `renderIcon` | `JSX.Element`|         | The icon component to be rendered. The size will automatically scale based on screen size using. |
