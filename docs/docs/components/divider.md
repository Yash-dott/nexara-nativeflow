# Divider

**Divider** component render a separator that can separate two components horizontally and vertically.


## Implementation code

```jsx
import { StyledView, StyledText, Divider } from '@nexara/nativeflow';

const Component = () => {
  return (
        <StyledView gap={20}>
            <StyledText primary>Item 1</StyledText>
            <Divider />
            <StyledText primary>Item 2</StyledText>
        </StyledView>

        <StyledView gap={20} flexDirection='row'>
            <StyledText primary>Item 1</StyledText>
            <Divider />
            <StyledText primary>Item 2</StyledText>
        </StyledView>
    );
}
export default Component;
```

## Divider Props

| Prop        | Type                     | Default | Description |
|------------|-------------------------|---------|-------------|
| `thickness` | `number`                | `0.7`   | Sets the thickness of the divider line. |
| `color`     | `string`                |         | Sets the color of the divider line; falls back to theme's subtle border color if not provided. |
| `style`     | `StyleProp<ViewStyle>`  |         | Custom styles to apply to the divider. |
