import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";
import { SwatchValue } from "./";

const SpacingSwatch = ({ value, css: componentCSS, ...rest }) => {
	return (
		<div
			css={css({
				p: 2,
				color: "secondary",
				bg: "muted",
				width: value,
				...componentCSS
			})}
			{...rest}
		>
			<SwatchValue color="inherit">{value}</SwatchValue>
		</div>
	);
};

SpacingSwatch.propTypes = {
	value: PropTypes.string.isRequired
};

/** @component */
export default SpacingSwatch;
