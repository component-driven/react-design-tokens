/* @jsx jsx */
import React from "react";
import { jsx } from "theme-ui";
import { SwatchValue } from "../";
import { valuePropType } from "../propTypes";

const SpacingSwatch = ({ value, css: componentCSS, ...rest }) => {
	return (
		<div
			sx={{
				py: 2,
				color: "secondary",
				bg: "muted",
				width: value,
				...componentCSS
			}}
			{...rest}
		>
			<SwatchValue color="inherit" sx={{ mx: 2 }}>
				{value}
			</SwatchValue>
		</div>
	);
};

SpacingSwatch.propTypes = {
	...valuePropType
};

/** @component */
export default SpacingSwatch;
