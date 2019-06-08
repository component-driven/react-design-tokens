import React from "react";
import { css } from "theme-ui";

function SwatchValue({ color = "secondary", css: componentCSS, ...rest }) {
	return (
		<p
			css={css({
				m: 0,
				fontFamily: "monospace",
				fontSize: "xs",
				color,
				...componentCSS
			})}
			{...rest}
		/>
	);
}

export default SwatchValue;
