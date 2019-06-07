import React from "react";
import PropTypes from "prop-types";
import { Swatches, ColorSwatch } from "./index";

export const PaletteSwatch = ({ token, value }) => (
	<Swatches items={value}>
		{(key, value) => <ColorSwatch value={value} token={`${token}.${key}`} />}
	</Swatches>
);

PaletteSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default PaletteSwatch;
