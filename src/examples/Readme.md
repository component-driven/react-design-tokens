### [Component-driven Design Systems Workshop](https://github.com/component-driven/component-driven-development) Design System

```jsx harmony
import { Grid } from "theme-ui";
import theme from "./cdds";
import { Colors, Spacing, Typography } from "../";

<Grid gap={5}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Grid>;
```

### GitHub Primer Design System

```jsx harmony
import { Grid } from "theme-ui";
import theme from "./primer";
import { Colors, Spacing, Typography } from "../";

<Grid gap={5}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Grid>;
```
