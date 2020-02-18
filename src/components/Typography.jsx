import React from "react";
import { ThemeProvider } from "theme-ui";
import Stack from "stack-styled/emotion/Stack.js";
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
			<Stack gap={5}>
				<Swatches theme={theme} items={theme.textStyles || {}}>
					{(token, value) => (
						<Swatch token={token} value={value} key={token}>
							<Stack gap={2}>
								<div>
									<SwatchToken
										css={{ display: "inline-block", fontFamily: "monospace" }}
									>
										{token}
									</SwatchToken>
								</div>
								<TextStyleSwatch token={token} value={value}>
									The quick brown fox jumps over the lazy dog
								</TextStyleSwatch>
							</Stack>
						</Swatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
