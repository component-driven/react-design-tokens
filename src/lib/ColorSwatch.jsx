import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { readableColor } from "polished";
import { Swatch } from "./";
import { themeGet } from "@styled-system/theme-get";

const ColorSwatchContainer = styled(Swatch)`
	color: ${props =>
		readableColor(
			themeGet(`colors.${props.bg}`)(props),
			"rgba(0, 0, 0, 0.85)",
			"rgba(255, 255, 255, 0.85)"
		)};
`;

export const ColorSwatch = ({ value, token }) => (
	<ColorSwatchContainer
		p={3}
		py={5}
		bg={token}
		fontFamily="base"
		fontSize="sm"
		token={token}
	>
		<div>{token}</div>
		<div>{value}</div>
	</ColorSwatchContainer>
);

ColorSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default ColorSwatch;
