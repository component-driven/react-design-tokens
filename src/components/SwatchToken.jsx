/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

function SwatchToken({ color = "text", css: componentCSS, ...rest }) {
	return (
		<h3
			sx={{
				m: 0,
				fontFamily: "body",
				fontSize: "sm",
				fontWeight: "normal",
				color,
				...componentCSS
			}}
			{...rest}
		/>
	);
}

export default SwatchToken;
