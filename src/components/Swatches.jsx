import React from "react";
import PropTypes from "prop-types";

const Swatches = ({ items = [], aliasesKey, children }) => (
	<>
		{Array.isArray(items)
			? items.map((value, index) =>
					children(
						index,
						value,
						aliasesKey && items[aliasesKey] ? items[aliasesKey][index] : null
					)
			  )
			: Object.keys(items)
					.filter(key => key !== aliasesKey)
					.map(key =>
						children(
							key,
							items[key],
							aliasesKey && items[aliasesKey] ? items[aliasesKey][key] : null
						)
					)}
	</>
);

Swatches.propTypes = {
	items: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
	children: PropTypes.func.isRequired
};

/** @component */
export default Swatches;
