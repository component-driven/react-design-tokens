/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

function SwatchValue({ color = "secondary", css: componentCSS, ...rest }) {
	return (
		<p
			sx={{
				m: 0,
				fontFamily: "monospace",
				fontSize: "xs",
				whiteSpace: "nowrap",
				color,
				...componentCSS
			}}
			{...rest}
		/>
	);
}

export default SwatchValue;
