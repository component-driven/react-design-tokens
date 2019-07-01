import React from "react";
import { ThemeProvider } from "theme-ui";
import { omitBy, pickBy, isString } from "lodash";
import Stack from "stack-styled/emotion/Stack.js";
import { Swatches, ColorSwatch, PaletteSwatch } from "../index";

export default function Colors({ theme }) {
	const gap = 2;
	const colors = pickBy(theme.colors, isString);
	const palettes = omitBy(theme.colors, isString);
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={gap}>
				<Swatches theme={theme} items={palettes}>
					{(token, value) => (
						<Stack gap={0} minWidth={100} key={token}>
							<PaletteSwatch token={token} value={value} />
						</Stack>
					)}
				</Swatches>
				<Stack gap={gap} minWidth={150}>
					<Swatches theme={theme} items={colors}>
						{(token, value) => (
							<ColorSwatch token={token} value={value} key={token} />
						)}
					</Swatches>
				</Stack>
			</Stack>
		</ThemeProvider>
	);
}
