---
title: Progress
sidebar_label: "Progress *⚠️🧪"
---
### &nbsp;
> ⚠️ **Experimental Component**
>
> This component is still being evaluated and may change in future releases.
### &nbsp;

# Progress

The `Progress` component displays a horizontal animated progress bar.

### Implementation code

```tsx
import { Progress } from '@nexara/nativeflow';

const Component = () => {
  return (
    <Progress value={75} />
  );
}

export default Component;
```

---

### Props

| Prop           | Type       | Default               | Description                                                                 |
|----------------|------------|------------------------|-----------------------------------------------------------------------------|
| `value`        | `number`   | `50`                   | The progress percentage to display (0–100).                                |
| `thickness`    | `number`   | `5`                    | Height of the progress bar.                                                |
| `br`           | `number`   | `100`                  | Border radius for both track and progress.                                 |
| `trackColor`   | `string`   | `'#E8E8E8'`            | Background color of the track (unfilled part).                             |
| `progressColor`| `string`   |                        | Color of the animated progress (filled part).                              |
