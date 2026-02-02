---
title: Surface
sidebar_label: "Surface *⚠️🧪"
---
### &nbsp;
> ⚠️ **Experimental Component**
>
> This component is still being evaluated and may change in future releases.
### &nbsp;


**Surface** component renders a container with customizable padding, border radius, and visual style (elevated or outlined), providing a versatile surface for other components.


## Implementation code

```jsx
import { Surface, Button } from '@nexara/nativeflow';
import { Camera } from 'lucide-react-native';

const Component = () => {
  return (
    <Surface>
        <Button
          renderIcon={<Camera size={17} />} 
        />
    </Surface>
  );
}
export default Component;
```



| Prop       | Type                                   | Default     | Description |
|------------|----------------------------------------|-------------|-------------|
| `padding`  | `number`                               | `10`        | Sets uniform padding inside the surface container. |
| `br`       | `number`                               | `5`         | Sets the border radius of the surface container. |
| `variant`  | `'default' \| 'elevated' \| 'outlined'` | `'default'` | Determines the visual style: `elevated` adds shadow, `outlined` adds border, `default` applies none. |
| `children` | `ReactNode`                            |             | Components or elements rendered inside the surface. |
