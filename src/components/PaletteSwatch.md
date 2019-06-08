Palette swatch renders all color tokens from a palette as defined in [System UI theme specification](https://system-ui.com/theme/)

It supports arrays

```jsx harmony
import theme from "../theme";
<PaletteSwatch token={"red"} value={theme.colors.red} />;
```

as well as object notation:

```jsx harmony
import theme from "../theme";

<PaletteSwatch token={"slate"} value={theme.colors.slate} />;
```
