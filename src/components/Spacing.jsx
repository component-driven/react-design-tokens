import React from "react";
import { css, ThemeProvider } from "theme-ui";
import { Swatches, Swatch, SpacingSwatch, SwatchToken } from "../index";
import Stack from "stack-styled/emotion/Stack.js";

export default function Spacing({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={4}>
				<Swatches items={theme.space}>
					{(token, value) => (
						<Swatch token={token} value={value}>
							<Stack gap={3} gridTemplateColumns="auto 1fr">
								<SwatchToken css={css({ p: 1 })}>{token}</SwatchToken>
								<SpacingSwatch value={value} />
							</Stack>
						</Swatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
