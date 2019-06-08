import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { readableColor } from "polished";
import { Swatch, SwatchToken, SwatchValue } from "./";
import { themeGet } from "@styled-system/theme-get";
import { css } from "theme-ui";

const ColorSwatchContainer = styled(Swatch)`
	color: ${props =>
		readableColor(
			themeGet(`colors.${props.bg}`)(props),
			"rgba(0, 0, 0, 0.85)",
			"rgba(255, 255, 255, 0.85)"
		)};
`;

export const ColorSwatch = ({ value, token }) => {
	const color = readableColor(
		value,
		"rgba(0, 0, 0, 0.75)",
		"rgba(255, 255, 255, 0.75)"
	);
	return (
		<Swatch
			token={token}
			value={value}
			css={css({
				p: 3,
				py: 4,
				bg: value,
				overflow: "hidden"
			})}
		>
			<SwatchToken color={color}>{token}</SwatchToken>
			<SwatchValue color={color}>{value}</SwatchValue>
		</Swatch>
	);
};

ColorSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default ColorSwatch;
