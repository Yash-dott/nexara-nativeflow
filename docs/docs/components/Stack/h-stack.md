

# Stack.H

**Stack.H** component render a horizontal stack that can easily be re-style by using props.


<img
  src={require('../img/stack-h.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>
## Implementation code

```jsx
import { Stack, StyledView } from 'rn-nativeflow';

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `justify` | string | flex-start | It change the justify content property of the Stack.H
| `align` | string | center | It align the content of the Stack.H
| `fWrap` | string | wrap | It change the wrap property of the Stack.H
| `gap` | number | 10 | It sets the gap between the children's
| `containerStyle` | object |  | It helps in to change the styles of the Stack.H