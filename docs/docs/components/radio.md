---
title: Radio
sidebar_label: "Radio *⚠️🧪"
---
### &nbsp;
> ⚠️ **Experimental Component**
>
> This component is still being evaluated and may change in future releases.
### &nbsp;

import useBaseUrl from '@docusaurus/useBaseUrl';
import ThemedImage from '@theme/ThemedImage';


**RadioGroup** component renders a group of radio buttons, manages the selected value internally, and calls onSelect when a child radio button is pressed.


## Implementation Code

```jsx
import { Radio } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Radio.Group 
        defaultValue='others'
        name='Gender'
        onSelect={(name, value) => console.log(name, value)}
    >
        <Radio.Item 
            value='male'
            label='Male'
        />
        <Radio.Item 
            value='female'
            label='Female'
        />
        <Radio.Item 
            value='others'
            label='Others'
        />
    </Radio.Group>
  );
};

export default Component;
```
## props 

### RadioGroup

| Prop          | Type       | Default | Description |
|---------------|------------|---------|-------------|
| `name`        | string     |         | Unique name for the radio group, useful for forms or multiple groups. |
| `defaultValue`| string     |         | Default selected value (uncontrolled usage). |
| `value`       | string     |         | Current selected value (controlled usage). |
| `children`    | ReactNode  |         | RadioItem components that belong to this group. |
| `onSelect`    | function   |         | Callback fired when a radio option is selected. Receives `(name: string, value: string)`. |

---

### RadioItem

| Prop         | Type        | Default | Description |
|--------------|------------|---------|-------------|
| `size`       | number     | 22      | Size of the radio circle. |
| `stroke`     | number     | 2       | Border width of the outer circle. |
| `color`      | string     |         | Custom color for the radio item (defaults to theme color). |
| `active`     | boolean    | false   | Whether this radio item is selected. |
| `name`       | string     |         | Unique name of the radio item (used in groups). |
| `value`      | string     |         | Value associated with this radio item. |
| `disabled`   | boolean    | false   | If true, disables the radio item. |
| `label`      | string     |         | Optional text label displayed beside the radio item. |
| `fs`         | number     |         | Font size override for the label text. |
| `fScale`     | TypographyScale | base | Typography scale for the label text. |
| `ff`         | string     |         | Font family for the label text. |
| `labelStyle` | StyledTextProps |     | Additional style props for the label text. |
