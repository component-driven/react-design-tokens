```jsx harmony
import { ThemeProvider } from "emotion-theming";
import theme from "../components/theme";

<ThemeProvider theme={theme}>
  <PaletteSwatch token={"red"} value={theme.colors.red} />
</ThemeProvider>;
```

```jsx harmony
import { ThemeProvider } from "emotion-theming";
import theme from "../components/theme";

<ThemeProvider theme={theme}>
  <PaletteSwatch token={"slate"} value={theme.colors.slate} />
</ThemeProvider>;
```
