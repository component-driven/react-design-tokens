import React from "react";
import PropTypes from "prop-types";
import copy from "clipboard-copy";

function Swatch(props) {
	return (
		<div
			aria-roledescription="Copy to clipboard"
			onClick={() => copy(props.token)}
			css={{
				cursor: "pointer"
			}}
			{...props}
		/>
	);
}

Swatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

export default Swatch;
