# Link

**Link** is a component that receives a title and href as props and renders clickable text that opens the URL, with optional styling.

## Implementation code

```jsx
import { Link } from '@nexara/nativeflow';

const Component = () => {
    return (
        <Link
          title='@nexara/nativeflow'
           href='https://www.npmjs.com/package/@nexara/nativeflow'
        />
    );
}
export default Component;
```

## Link Props

| Prop   | Type           | Default | Description |
|--------|----------------|---------|-------------|
| `title` | `string`      | `'Link'`| The text to be displayed as the link. |
| `href`  | `string`      |         | The URL that will be opened when the link is pressed. |
| `style` | `TextStyle`   |         | Optional custom styles for the link text. |
