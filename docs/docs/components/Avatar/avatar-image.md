---
title: Avatar.Image
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';

# Avatar.Image

**Avatar.Image** components render a pre-styled avatar with an image that can be customized using various props.

<img
  src={require('../img/avatar-image.jpeg').default}
  alt="Example Avatar"
  style={{ height: 150 }}
/>

## Implementation Code

```jsx
import { Avatar } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Avatar.Image
      size={60}
      source={require('./example.jpg')}
      // source={{ uri: 'https://www.xyz.com/user.jpg' }}  // Alternative way to use an image
    />
  );
};

export default Component;
```

## Props

| Prop | Type | Default | Description |
|---|---|---|---|
| `size` | `number` | `60` | Defines the width and height of the avatar. |
| `source` | `{ uri?: string } \| number` |  | Specifies the image source, either as a remote URI or a local asset reference. |
| `bg` | `string` |  | Sets the background color of the avatar. |
| `resizeMode` | `NonNullable<ImageProps['resizeMode']>` |  | Controls how the image is resized to fit within its container. |
| `containerStyle` | `ViewStyle` |  | Applies custom styles to the avatar container. |
| `imageStyle` | `StyleProp<ImageStyle>` |  | Applies custom styles to the image inside the avatar. |


