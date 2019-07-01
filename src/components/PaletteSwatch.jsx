import React from "react";
import PropTypes from "prop-types";
import { Swatches, ColorSwatch } from "../index";
import { tokenPropType, valuePropType } from "../propTypes";

export const PaletteSwatch = ({ token, value }) => (
	<Swatches items={value}>
		{(key, value) => (
			<ColorSwatch
				value={value}
				token={`${token}.${key}`}
				key={`${token}.${key}`}
			/>
		)}
	</Swatches>
);

PaletteSwatch.propTypes = {
	...tokenPropType,
	...valuePropType
};

/** @component */
export default PaletteSwatch;
