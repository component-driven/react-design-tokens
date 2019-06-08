import React from "react";
import { css } from "theme-ui";

function SwatchToken({ color = "text", css: componentCSS, ...rest }) {
	return (
		<h3
			css={css({
				m: 0,
				fontFamily: "body",
				fontSize: "sm",
				fontWeight: "normal",
				color,
				...componentCSS
			})}
			{...rest}
		/>
	);
}

export default SwatchToken;
