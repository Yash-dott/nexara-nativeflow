# StyledText

**StyledText** renders a customizable Text component with responsive styling based on variants and props.

## Implementation

```jsx
import { StyledView, StyledText } from '@nexara/nativeflow';

const Component = () => {
  return (
    <StyledView f={1} themeBg>
        <StyledText primary>Here is your text...</StyledText>
    </StyledView>
  );
};
export default Component;
```

## Props

| Prop         | Type                          | Default     | Description                                                                 |
|--------------|-------------------------------|-------------|-----------------------------------------------------------------------------|
| `variant`    | `'h1'`\| `'h2'` ... `'h7'`    | `'h5'`      | Controls the font size using theme-based variant sizes.                     |
| `ff`         | `string`                      |             | Sets the font family.                                                       |
| `fs`         | `number`                      |             | Manually overrides the font size.                                           |
| `tas`        | `boolean`                     | `false`     | If `true`, centers the text horizontally (`textAlign: center`).             |
| `fw`         | `string`                      | `'normal'`  | Sets the font weight.                                                       |
| `color`      | `string`                      |             | Sets the text color directly.                                               |
| `themeColor` | `boolean`                     |             | If `true`, applies the theme's primary color.                               |
| `primary`    | `boolean`                     |             | If `true`, uses theme’s `textPrimary` color.                                |
| `secondary`  | `boolean`                     |             | If `true`, uses theme’s `textSecondary` color.                              |
| `style`      | `TextStyle`                   |             | Additional styles to apply to the text.                                     |


- ### Font Size by Variant

| Variant | Font Size |
|---------|------------|
| `h1`    | 32         |
| `h2`    | 24         |
| `h3`    | 18         |
| `h4`    | 16         |
| `h5`    | 14         |
| `h6`    | 12         |
| `h7`    | 10         |
```
