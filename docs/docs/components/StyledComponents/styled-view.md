

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
    <StyledView f={1} >
        <StyledView h={100} w={100} bg='red'></StyledView>
    </StyledView>
  );
}
export default Component;
```

## Props

| Prop       | Type                     | Default     | Description                                                                                     |
|------------|--------------------------|-------------|-------------------------------------------------------------------------------------------------|
| `f`        | `number`                 |             | Flex value controlling the growth, shrink, and basis of the view.                               |
| `align`    | `ViewStyle['alignItems']`|             | Aligns children along the cross axis (`alignItems`).                                           |
| `justify`  | `ViewStyle['justifyContent']` |       | Aligns children along the main axis (`justifyContent`).                                        |
| `fWrap`    | `ViewStyle['flexWrap']`  |             | Determines if children wrap when exceeding the container size.                                  |
| `bg`       | `string`                 |             | Sets a custom background color for the view.                                                   |
| `themeBg`  | `boolean`                | `false`     | If `true`, applies the theme's background color instead of the `bg` value.                     |
| `h`        | `DimensionValue`         |             | Sets the height of the view in pixels (number) or percentage (string).                         |
| `w`        | `DimensionValue`         |             | Sets the width of the view in pixels (number) or percentage (string).                           |
| `style`    | `StyleProp<ViewStyle>`   |             | Additional custom styles applied to the view, which override or extend default styles.         |
| `children` | `React.ReactNode`        |             | Child components or elements rendered inside the view.                                         |
| `ref`      | `React.Ref<View>`        |             | Ref to access the underlying `View` component for imperative operations.                        |
