

# Stack.V

**Stack.V** component render a vertical stack that can easily be re-style by using props.

<!-- 
<img
  src={require('./img/button-light.jpeg').default}
  alt="Example banner"
  style={{height:400}}
/>
<img
  src={require('./img/button-dark.jpeg').default}
  alt="Example banner"
  style={{height:400}}
/> -->
## Implementation code

```jsx
import { Stack } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Stack.V>
        <View style={{height:100, width:100, backgroundColor: 'red'}}></View>
        <View style={{height:100, width:100, backgroundColor: 'red'}}></View>
        <View style={{height:100, width:100, backgroundColor: 'red'}}></View>
        <View style={{height:100, width:100, backgroundColor: 'red'}}></View>
        <View style={{height:100, width:100, backgroundColor: 'red'}}></View>
    </Stack.V>
  );
}
export default Component;
```

## Props

| Prop     | Type        | Default | Description                                      |
|----------|-------------|---------|--------------------------------------------------|
| `align`  | `string`    | center  | Aligns children vertically within the `VStack`.  |
| `gap`    | `number`    | 10      | Sets the space between child elements.          |
| `style`  | `ViewStyle` |         | Custom styles for the `VStack` container.       |

