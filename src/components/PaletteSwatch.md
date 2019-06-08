Palette swatch renders all color tokens from a palette as defined in [System UI theme specification](https://system-ui.com/theme/)

It supports arrays

```jsx harmony
const palette = [
  "#FFCDD2",
  "#EF9A9A",
  "#E57373",
  "#EF5350",
  "#F44336",
  "#E53935",
  "#D32F2F",
  "#C62828",
  "#B71C1C"
];
<PaletteSwatch token={"red"} value={palette} />;
```

as well as object notation:

```jsx harmony
import theme from "../theme";

<PaletteSwatch token={"slate"} value={theme.colors.slate} />;
```
