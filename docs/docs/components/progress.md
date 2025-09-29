# Progress

**Progress** component renders a horizontal progress bar with customizable thickness, colors, and border radius, animating smoothly according to the provided value prop.

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
| `trackColor`   | `string`   |                        | Background color of the track (unfilled part).                             |
| `progressColor`| `string`   |                        | Color of the animated progress (filled part).                              |
