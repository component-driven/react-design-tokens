```jsx harmony
import Stack from "stack-styled/emotion/Stack";
import theme from "../theme";
import { Swatch, SwatchToken, SpacingSwatch } from "../";

<Stack gap={2}>
  <Swatches theme={theme} items={theme.space}>
    {(token, value) => (
      <Swatch token={token} value={value}>
        <SwatchToken>{token}</SwatchToken>
        <SpacingSwatch value={value} />
      </Swatch>
    )}
  </Swatches>
</Stack>;
```
