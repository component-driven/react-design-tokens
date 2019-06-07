import React from "react";
import { ThemeProvider } from "emotion-theming";
import { Swatches, SpacingSwatch } from "../lib";
import Stack from "stack-styled/emotion/Stack";

export default function Spacing({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={2}>
				<Swatches items={theme.space}>
					{(key, value) => <SpacingSwatch token={key} value={value} />}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
