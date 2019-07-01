import React from "react";
import PropTypes from "prop-types";
import { readableColor } from "polished";
import { Swatch, SwatchToken, SwatchValue } from "../";
import { css } from "theme-ui";
import { tokenPropType, valuePropType } from "../propTypes";

export const ColorSwatch = ({ value, token }) => {
	const color = readableColor(
		value,
		"rgba(0, 0, 0, 0.75)",
		"rgba(255, 255, 255, 0.75)"
	);
	return (
		<Swatch token={token} value={value}>
			<div
				css={css({
					p: 3,
					pt: 6,
					bg: value,
					overflow: "hidden"
				})}
			>
				<SwatchToken color={color}>{token}</SwatchToken>
				<SwatchValue color={color}>{value}</SwatchValue>
			</div>
		</Swatch>
	);
};

ColorSwatch.propTypes = {
	...tokenPropType,
	...valuePropType
};

/** @component */
export default ColorSwatch;
