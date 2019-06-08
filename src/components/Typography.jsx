import React from "react";
import { ThemeProvider, css } from "theme-ui";
import Stack from "stack-styled/emotion/Stack";
import {
	FontSizeSwatch,
	Swatch,
	Swatches,
	SwatchToken,
	SwatchValue
} from "../lib";

export default function Typography({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={2}>
				<Swatches theme={theme} items={theme.fontSizes}>
					{(token, value) => (
						<Swatch token={token} value={value}>
							<Stack gap={4} gridTemplateColumns="minmax(auto, 10rem) 1fr">
								<div
									css={css({
										alignSelf: "center",
										overflow: "hidden"
									})}
								>
									<SwatchToken>{token}</SwatchToken>
									<SwatchValue>{value}</SwatchValue>
								</div>
								<FontSizeSwatch token={token} value={value}>
									Aa
								</FontSizeSwatch>
							</Stack>
						</Swatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
