---
title: Avatar.Text
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Avatar.Text

**Avatar.Text** components render a pre-styled avatar with text that can be customized using various props.

<img src={require('../img/avatar-text.jpeg').default} alt="Example Avatar" style={{ height: 150 }} />

## Implementation Code

```jsx
import { Avatar } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Avatar.Text
      size={60}
      text='YH'
    />
  );
};

export default Component;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `70` | Defines the width and height of the avatar. |
| `text` | `string` | `YH` | Specifies the text to be displayed inside the avatar (e.g., initials). |
| `fs` | `number` |  | Defines the font size of the text inside the avatar. |
| `bg` | `string` |  | Sets the background color of the avatar. |
| `containerStyle` | `ViewStyle` |  | Applies custom styles to the avatar container. |
| `textStyle` | `TextStyle` |  | Applies custom styles to the text inside the avatar. |

