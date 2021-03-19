/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { readableColor } from "polished";
import { Swatch, SwatchToken, SwatchValue } from "../";
import { tokenPropType, valuePropType } from "../propTypes";

export const ColorSwatch = ({ value, token, aliases }) => {
	const color = readableColor(value, "black", "white");
	return (
		<Swatch token={token} value={value}>
			<div
				sx={{
					p: 3,
					pt: 6,
					bg: value,
					overflow: "hidden"
				}}
			>
				<SwatchToken color={color}>{token}</SwatchToken>
				{aliases
					? (Array.isArray(aliases) ? aliases : [aliases]).map(alias => (
							<SwatchToken color={color}>{alias}</SwatchToken>
					  ))
					: null}
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
