```jsx harmony
import theme from "../theme";

<Typography theme={theme} />;
```

Starting from v5 of styled-system, you can co-locate variants inside your components.

Consider this is your `Text` component that defines text styles:

```js { "file": "../../examples/Text.js" }
```

```jsx harmony
import theme from "../theme";
import { textStyles } from "../examples/Text";

<Typography theme={{ ...theme, textStyles }} />;
```
