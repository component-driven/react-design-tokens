import React from "react";
import PropTypes from "prop-types";
import { css } from "theme-ui";
import { valuePropType } from "../propTypes";

const FontSizeSwatch = ({ value, css: componentCSS, ...rest }) => (
	<p
		css={css({
			alignSelf: "center",
			m: 0,
			fontFamily: "body",
			fontSize: value,
			...componentCSS
		})}
		{...rest}
	/>
);

FontSizeSwatch.propTypes = {
	...valuePropType
};

/** @component */
export default FontSizeSwatch;
