

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
import { StyledView, Stack } from '@nexara/nativeflow';

const Component = () => {
  return (
    <StyledView f={1} themeBg>
        <StyledView h={100} w={100} bg='red'></StyledView>
    </StyledView>
  );
}
export default Component;
```

## Props

| Prop       | Type        | Default     | Description                                                              |
|------------|-------------|-------------|--------------------------------------------------------------------------|
| `f`        | `number`    |             | Sets the `flex` value of the view.                                       |
| `align`    | `string`    |             | Applies `alignItems` style to the view.                                  |
| `justify`  | `string`    |             | Applies `justifyContent` style to the view.                              |
| `fWrap`    | `string`    |             | Applies `flexWrap` to control wrapping behavior.                         |
| `bg`       | `string`    |             | Sets the background color of the view.                                   |
| `themeBg`  | `boolean`   | `false`     | If `true`, uses the theme's secondary color as the background.           |
| `h`        | `number`    |             | Sets the height of the view.                                             |
| `w`        | `number`    |             | Sets the width of the view.                                              |
| `style`    | `ViewStyle` |             | Additional custom styles applied to the view.                            |


