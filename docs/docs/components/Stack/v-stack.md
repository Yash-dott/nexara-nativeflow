

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
import { Stack } from 'rn-nativeflow';

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `align` | string | center | It align the content of the Stack.V
| `gap` | number | 10 | It sets the gap between the children's
| `containerStyle` | object |  | It helps in to change the styles of the Stack.V