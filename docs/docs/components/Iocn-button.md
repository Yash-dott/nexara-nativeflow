---
title: Icon-button
sidebar_label: "Icon-button *⚠️🧪"
---
### &nbsp;
> ⚠️ **Experimental Component**
>
> This component is still being evaluated and may change in future releases.
### &nbsp;

# Icon button

**IconButton** render a Icon with button properties 



## Implementation code

```jsx
import { IconButton, Icon } from '@nexara/nativeflow';
import { Camera } from 'lucide-react-native';

const Component = () => {
  return (
    <IconButton onPress={() => console.log("IconButton Pressed")} >
      <Icon renderIcon={<Camera size={30} color="#000" />} />
    </IconButton>

  );
}
export default Component;
```


| Prop | Type | Default | Description |
|---|---|---|---|
| `rippleColor` | string |  | It sets the ripple color of the IconButton when anyone press it

