

# StyledView

**StyledView** component render a view that can easily be re-style by using props.

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
import { StyledView, Stack } from 'rn-nativeflow';

const Component = () => {
  return (
    <StyledView f={1} themeBg>
        <StyledView h={100} w={100} bg='red'></StyledView>
    </StyledView>
  );
}
export default Component;
```

| Prop | Type | Default | Description |
|---|---|---|---|
| `f` | number |  | It sets the flex property on the view
| `align` | string |  | It apply align items property on the view
| `justify` | string |  | It apply justify content property on the view
| `fWrap` | string |  | It apply flex wrap property on the view
| `bg` | string |  | It sets the background color of the view
| `themeBg` | boolean |  | It apply background color according to theme
| `h` | number |  | It set the height of the view
| `w` | number |  | It set the width of the view
| `style` | object |  | It takes styles object and apply on the view

