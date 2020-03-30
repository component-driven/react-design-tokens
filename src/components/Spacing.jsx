/* @jsx jsx */
import React from "react";
import { Grid, jsx, ThemeProvider } from "theme-ui";
import { SpacingSwatch, Swatch, Swatches, SwatchToken } from "../index";

export default function Spacing({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Grid gap={4}>
				<Swatches items={theme.space}>
					{(token, value) => (
						<Swatch token={token} value={value} key={token}>
							<Grid
								gap={3}
								sx={{ alignItems: "center", gridTemplateColumns: "auto 1fr" }}
							>
								<SwatchToken>{token}</SwatchToken>
								<SpacingSwatch value={value} />
							</Grid>
						</Swatch>
					)}
				</Swatches>
			</Grid>
		</ThemeProvider>
	);
}
