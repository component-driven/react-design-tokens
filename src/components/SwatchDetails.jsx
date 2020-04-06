/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";

function SwatchDetails({ color = "text", css: componentCSS, ...rest }) {
	return (
		<p
			sx={{
				m: 0,
				fontFamily: "body",
				fontSize: "xs",
				fontWeight: "normal",
				textAlign: "right",
				color,
				...componentCSS
			}}
			{...rest}
		/>
	);
}

export default SwatchDetails;
