

# Stack.H

**Stack.H** component render a horizontal stack layout that can easily be re-style by using props.


<img
  src={require('../img/stack-h.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>
## Implementation code

```jsx
import { Stack, StyledView } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Stack.H>
      <StyledView height={100} width={100} bg='red'></StyledView>
      <StyledView height={100} width={100} bg='red'></StyledView>
      <StyledView height={100} width={100} bg='red'></StyledView>
      <StyledView height={100} width={100} bg='red'></StyledView>
      <StyledView height={100} width={100} bg='red'></StyledView>
    </Stack.H>
  );
}
export default Component;
```

## Props

| Prop             | Type                     | Default    | Description                                         |
|------------------|--------------------------|------------|-----------------------------------------------------|
| `align`          | `string`                 | `'center'` | Specifies the vertical alignment of child elements.|
| `fWrap`          | `string`                 | `'wrap'`   | Determines whether child elements should wrap.     |
| `gap`            | `number`                 | `10`       | Sets the spacing between child elements.           |
| `containerStyle` | `StyleProp<ViewStyle>`   |            | Allows custom styling for the HStack container.    |
