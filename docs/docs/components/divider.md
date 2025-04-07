
# Divider

**Divider** component render a separator that can separate two components horizontally and vertically.

<img
  src={require('./img/divider.jpeg').default}
  alt="Example banner"
  style={{height:150}}
/>

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



## Props

| Prop       | Type           | Default | Description                                                    |
|------------|----------------|---------|----------------------------------------------------------------|
| `thickness` | number         | `0.2`   | It sets the thickness of the border                            |
| `color`    | string          |         | It sets the color of the divider (falls back to theme if not provided) |
| `style`    | `StyleProp<ViewStyle> `   |         | Helps to change the styles of the divider                      |
