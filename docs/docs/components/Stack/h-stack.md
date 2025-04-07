

# Stack.H

**Stack.H** component render a horizontal stack that can easily be re-style by using props.


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

| Prop      | Type                | Default    | Description                                                            |
|-----------|---------------------|------------|------------------------------------------------------------------------|
| `justify` | `string`            |            | Aligns children horizontally.                                          |
| `align`   | `string`            | `'center'` | Aligns children vertically.                                            |
| `fWrap`   | `string`            | `'wrap'`   | Defines if children wrap.                                              |
| `gap`     | `number`            | `10`       | Space between children.                                                |
| `style`   | `ViewStyle`         |            | Custom styles for the HStack container.                                |
