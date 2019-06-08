import React from "react";
import PropTypes from "prop-types";

const Swatches = ({ items = [], children }) => (
	<>
		{Array.isArray(items)
			? items.map((value, index) => children(index, value))
			: Object.keys(items).map(key => children(key, items[key]))}
	</>
);

Swatches.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	children: PropTypes.func.isRequired
};

/** @component */
export default Swatches;
