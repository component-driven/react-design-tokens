import React from "react";
import PropTypes from "prop-types";
import copy from "clipboard-copy";
import { tokenPropType, valuePropType } from "../propTypes";

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
	...tokenPropType,
	...valuePropType
};

export default Swatch;
