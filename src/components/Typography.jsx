import React from "react";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import Stack from "stack-styled/emotion/Stack";
import { Swatches, FontSizeSwatch } from "../lib";

const FontSizeSample = styled.p`
	margin: 0;
	line-height: 1;
	font-size: ${props => props.theme.fontSizes[props.fontSize]};
	font-family: ${props => props.theme.fonts.base};
`;

export default function Typography({ theme }) {
	return (
		<ThemeProvider theme={theme}>
			<Stack gap={2}>
				<Swatches theme={theme} items={theme.fontSizes}>
					{(key, value) => (
						<FontSizeSwatch token={key} value={value}>
							Aa
						</FontSizeSwatch>
					)}
				</Swatches>
			</Stack>
		</ThemeProvider>
	);
}
