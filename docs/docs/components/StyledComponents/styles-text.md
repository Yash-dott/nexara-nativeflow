

# StyledText

**StyledText** component render a Text that can easily be re-style by using props.

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
import { StyledView, StyledText } from 'rn-nativeflow';

const Component = () => {
  return (
    <StyledView f={1} themeBg>
        <StyledText>Here is your text...</StyledText>
    </StyledView>
  );
}
export default Component;
```
## Props
| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `h1`, `h2`, `h3`, `h4`, `h5`, `h6`, `h7`|  | It change the font sizes on the basis of variant
| `ff` | string |  | It set the font family of the text
| `fs` | number | 12 | It set the font size of the text
| `tas` | boolean | false | It set the text align to center when `tas=true`
| `fw` | string |  | It set the font weight of the text
| `color` | string |  | It set the color of the text
| `themeColor` | boolean |  | It apply the theme color on the text
| `primary` | boolean |  | It apply the textPrimary color on the text according to theme
| `secondary` | boolean |  | It apply the textSecondary color on the text according to theme
| `style` | object |  | It takes styles object and apply on the text


## variant fontSizes

| variant | size |
|---|---|
| `h1` |  32|
| `h2` |  24|
| `h3` |  18|
| `h4` |  16|
| `h5` |  14|
| `h6` |  12|
| `h7` |  10|
