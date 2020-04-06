/* @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { readableColor } from "polished";
import colorable from "colorable";
import { Swatch, SwatchToken, SwatchValue, SwatchDetails } from "../";
import { tokenPropType, valuePropType } from "../propTypes";

const getBestAccessibility = access => {
	if (access.aaa) {
		return "AAA";
	}
	if (access.aa) {
		return "AA";
	}
	if (access.aaaLarge) {
		return "AAA Large";
	}
	if (access.aaLarge) {
		return "AA Large";
	}

	return undefined;
};

export const ColorSwatch = ({ value, token }) => {
	const black = "black";
	const white = "white";
	const color = readableColor(value, black, white);
	const accessibility = colorable({
		main: value,
		black,
		white
	});
	const { values, combinations } = accessibility.find(
		result => result.name === "main"
	);
	const access = combinations
		.map(combination => getBestAccessibility(combination.accessibility))
		.filter(Boolean)
		.join(", ");

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
				<SwatchValue color={color}>{value}</SwatchValue>
				<SwatchDetails color={color}>{access}</SwatchDetails>
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
