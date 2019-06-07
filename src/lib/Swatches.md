```jsx harmony
import Stack from "stack-styled/emotion/Stack";
import theme from "../components/theme";
import { SpacingSwatch } from "./";

<Stack gap={2}>
  <Swatches theme={theme} items={theme.space}>
    {(key, value) => <SpacingSwatch token={key} value={value} />}
  </Swatches>
</Stack>;
```
