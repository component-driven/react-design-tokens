```jsx harmony
import { ThemeProvider } from "emotion-theming";
import theme from "../components/theme";

<ThemeProvider theme={theme}>
  <ColorSwatch token={"accent"} value={theme.colors.accent} />
</ThemeProvider>;
```
