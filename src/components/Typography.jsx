import React from "react";
import { ThemeProvider, css } from "theme-ui";
import Stack from "stack-styled/emotion/Stack.js";
import {
	FontSizeSwatch,
	Swatch,
	Swatches,
	SwatchToken,
	SwatchValue
} from "../index";

export default function Typography({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={5}>
				<Swatches theme={theme} items={theme.fontSizes}>
					{(token, value) => (
						<Swatch token={token} value={value}>
							<Stack gap={2}>
								<div>
									<SwatchToken css={{ display: "inline-block" }}>
										{token}
									</SwatchToken>{" "}
									<SwatchValue css={{ display: "inline-block" }}>
										({value})
									</SwatchValue>
								</div>
								<FontSizeSwatch
									token={token}
									value={value}
									css={css({ color: "text" })}
								>
									The quick brown fox jumps over the lazy dog
								</FontSizeSwatch>
							</Stack>
						</Swatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
