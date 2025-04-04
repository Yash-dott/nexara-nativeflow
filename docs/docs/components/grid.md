
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
import { Grid, StyledText } from 'rn-nativeflow';

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

| Prop | Type | Default | Description |
|---|---|---|---|
| `container` | boolean | false |
| `item` | boolean | false |
| `spacing` | number | 0 | Overall spacing between items
| `spacingH` | number | 0 | Horizontal spacing between items
| `spacingV` | number | 0 | Vertical spacing between items
| `xs` | number | 12 | item size on xs devices and above
| `sm` | number | 0 | item size on sm devices and above
| `md` | number | 0 | item size on md devices and above
| `lg` | number | 0 | item size on lg devices and above
| `xl` | number | 0 | item size on xl devices and above
| `containerStyle` | object |  | Helps to change the styles of the container or item


## Grid screen sizes

| size |value |
|---|---|
xm | 0 and above|
sm | 360 and above |
md | 600 and above |
lg | 768 and above |
xl | 960 and above |