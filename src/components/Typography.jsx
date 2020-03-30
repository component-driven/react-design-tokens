/* @jsx jsx */
import { Grid, jsx, ThemeProvider } from "theme-ui";
import React from "react";
import { Swatch, Swatches, SwatchToken, TextStyleSwatch } from "../";

/**
 * Typography component showcases all available text styles defined in `theme.textStyles`
 * object of [styled-system theme](https://styled-system.com/table#variants).
 * @param theme
 * @return React.Element
 * @constructor
 */
export default function Typography({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Grid gap={5}>
				<Swatches theme={theme} items={theme.textStyles || {}}>
					{(token, value) => (
						<Swatch token={token} value={value} key={token}>
							<Grid gap={3}>
								<SwatchToken
									sx={{
										display: "inline-block",
										fontFamily: "monospace"
									}}
								>
									{token}
								</SwatchToken>
								<TextStyleSwatch token={token} value={value}>
									The quick brown fox jumps over the lazy dog
								</TextStyleSwatch>
							</Grid>
						</Swatch>
					)}
				</Swatches>
			</Grid>
		</ThemeProvider>
	);
}
