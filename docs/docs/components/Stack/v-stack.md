

# Stack.V

**Stack.V** component renders a vertical stack layout that can be easily customized using props.

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

| Prop             | Type                     | Default | Description                                           |
|------------------|--------------------------|---------|-------------------------------------------------------|
| `gap`            | `number`                 | 10      | Specifies the spacing between each child component. |
| `containerStyle` | `StyleProp<ViewStyle>`   |         | Allows custom styling for the `VStack` wrapper.     |
