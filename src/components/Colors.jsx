import React from "react";
import { Grid, ThemeProvider } from "theme-ui";
import { omitBy, pickBy, isString } from "lodash";
import { Swatches, ColorSwatch, PaletteSwatch } from "../index";

export default function Colors({ theme }) {
	const gap = 2;
	const colors = pickBy(theme.colors, isString);
	const palettes = omitBy(theme.colors, isString);
	return (
		<ThemeProvider theme={theme}>
			<Grid gap={gap}>
				<Swatches theme={theme} items={palettes}>
					{(token, value) => (
						<Grid
							gap={0}
							key={token}
							sx={{
								gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))"
							}}
						>
							<PaletteSwatch token={token} value={value} />
						</Grid>
					)}
				</Swatches>
				<Grid
					gap={gap}
					sx={{
						gridTemplateColumns: "repeat(auto-fit, minmax(90px, 1fr))"
					}}
				>
					<Swatches theme={theme} items={colors}>
						{(token, value) => (
							<ColorSwatch token={token} value={value} key={token} />
						)}
					</Swatches>
				</Grid>
			</Grid>
		</ThemeProvider>
	);
}
