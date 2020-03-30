```jsx harmony
import { Grid } from "theme-ui";
import theme from "../theme";
import { Swatch, Swatches, SwatchToken, SpacingSwatch } from "../";

<Grid gap={4}>
  <Swatches theme={theme} items={theme.space}>
    {(token, value) => (
      <Swatch token={token} value={value} key={token}>
        <SwatchToken>{token}</SwatchToken>
        <SpacingSwatch value={value} />
      </Swatch>
    )}
  </Swatches>
</Grid>;
```
