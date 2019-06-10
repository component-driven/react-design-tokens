### [Component-driven Design Systems Workshop](https://github.com/component-driven/component-driven-development) Design System

```jsx harmony
import Stack from "stack-styled";
import theme from "./cdds";
import { Colors, Spacing, Typography } from "../";

<Stack gap={6}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Stack>;
```

### GitHub Primer Design System

```jsx harmony
import Stack from "stack-styled";
import theme from "./primer";
import { Colors, Spacing, Typography } from "../";

<Stack gap={6}>
  <Colors theme={theme} />
  <Spacing theme={theme} />
  <Typography theme={theme} />
</Stack>;
```
