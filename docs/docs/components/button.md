---
title: Button
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Button

**Button** components render a pre-styled button that can be easily customized using props.

<img
  src={require('./img/button-light.jpeg').default}
  alt="Example button light mode"
  style={{ height: 400 }}
/>
<img
  src={require('./img/button-dark.jpeg').default}
  alt="Example button dark mode"
  style={{ height: 400 }}
/>

## Implementation Code

```jsx
import { Button, Icon } from '@nexara/nativeflow';
import { ArrowRight } from 'lucide-react-native';

const Component = () => {
  return (
    <Button
      variant='outlined'
      title='Open'
      rightIcon='Send'
      renderRightIcon={<Icon renderIcon={<ArrowRight size={17} color='white' />} />}
      onPress={() => console.log('Button clicked!')}
    />
  );
};

export default Component;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `variant` | `outlined`, `contained` |  `'contained'` | Defines the button style (outlined or contained). |
| `type` | `round`, `flat` | `'flat'` | Defines the button shape (round or flat). |
| `fullWidth` | `boolean` | `false` | Expands button to full width if set to true. |
| `paddingH` | `number` | `30` (if `fullWidth` is true) / `20` (otherwise) | Defines the horizontal padding of the button. |
| `bg` | `string` | `theme.colors.primary` | Sets the background color of the button. |
| `br` | `number` | `5` | Defines the border radius of the button (applies when `type='flat'`). |
| `stroke` | `number` | `1` | Defines the border width (applies when `variant='outlined'`). |
| `strokeColor` | `string` | `undefined` | Defines the border color (applies when `variant='outlined'`). |
| `title` | `string` | `'Button'` | Sets the text label of the button. |
| `titleColor` | `string` | `#000` | Sets the color of the button text. |
| `titleFS` | `number` | `12` | Defines the font size of the button text. |
| `titleFF` | `string` | `undefined` | Defines the font family of the button text. |
| `size` | `number` | `50` | Defines the button size (applies when `type='round'`). |
| `disabled` | `boolean` | `false` | Disables the button when set to true. |
| `renderIcon` | `JSX.Element` | `undefined` | Renders a custom icon inside a round button. |
| `renderLeftIcon` | `JSX.Element` | `undefined` | Renders a custom left icon inside a flat button. |
| `renderRightIcon` | `JSX.Element` | `undefined` | Renders a custom right icon inside a flat button. |
| `onPress` | `function` | `undefined` | Callback function triggered when the button is pressed. |
| `buttonContainerStyle` | `ViewStyle` | `undefined` | Custom styles for the button container. |
| `textStyle` | `TextStyle` | `undefined` | Custom styles for the button text. |


