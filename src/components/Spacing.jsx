import React from "react";
import { ThemeProvider } from "theme-ui";
import { Swatches, Swatch, SpacingSwatch, SwatchToken } from "../index";
import Stack from "stack-styled/emotion/Stack";

export default function Spacing({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={4}>
				<Swatches items={theme.space}>
					{(token, value) => (
						<Swatch token={token} value={value}>
							<Stack gap={1}>
								<SwatchToken>{token}</SwatchToken>
								<SpacingSwatch value={value} />
							</Stack>
						</Swatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
