
# Grid

**Grid** component render a container that can resize automatically on the basis of provided props.

<img
  src={require('./img/grid-small.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>
<img
  src={require('./img/grid-md.jpeg').default}
  alt="Example banner"
  style={{height:300}}
/>

## Implementation code

```jsx
import { Grid, StyledText } from '@nexara/nativeflow';

const Component = () => {
  return (
        <Grid container>
            <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'green', height: 100}} xs={4} md={12} >
                <StyledText>Item 1 xs={4}</StyledText>
            </Grid>
            <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'gray', height: 100 }} xs={4} md={6} >
                <StyledText >Item 2 xs={4}</StyledText>
            </Grid>
            <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'blue', height: 100 }} xs={4} md={6}>
                <StyledText >Item 3 xs={4}</StyledText>
            </Grid>
            <Grid item justifyContent='center' alignItems='center' containerStyle={{ backgroundColor: 'red', height: 100 }} xs={12} md={6} >
                <StyledText >Item 4 xs={12}</StyledText>
            </Grid>
        </Grid>
    );
}
export default Component;
```

## Props

## Props

## Props

| Prop             | Type                        | Default | Description                                                                 |
|------------------|-----------------------------|---------|-----------------------------------------------------------------------------|
| `container`      | `boolean`                   | `false` | If true, acts as a grid container. If `item` is false, this is set to true. |
| `item`           | `boolean`                   | `false` | If true, acts as a grid item. Should be used inside a container.            |
| `spacing`        | `number`                    | `0`     | Overall spacing (gap) between grid items.                                   |
| `spacingH`       | `number`                    | `0`     | Horizontal padding (left & right) of the container.                         |
| `spacingV`       | `number`                    | `0`     | Vertical padding (top & bottom) of the container.                           |
| `size`           | `number`                    | `12`    | Total number of columns in the grid system.                                 |
| `xs`             | `number`                    | `12`    | Number of columns the item spans on extra-small (mobile) screens.           |
| `sm`             | `number`                    | `0`     | Number of columns the item spans on small (tablet) screens.                 |
| `md`             | `number`                    | `0`     | Number of columns the item spans on medium (small laptops) screens.         |
| `lg`             | `number`                    | `0`     | Number of columns the item spans on large (desktops) screens.               |
| `xl`             | `number`                    | `0`     | Number of columns the item spans on extra-large (big monitors) screens.     |
| `containerStyle` | `ViewStyle`      |         | Additional styles for the grid container or item.                           |



## Grid screen sizes

| size |value |
|---|---|
xm | 0 and above|
sm | 360 and above |
md | 600 and above |
lg | 768 and above |
xl | 960 and above |