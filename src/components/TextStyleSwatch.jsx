import React from "react";
import { css } from "theme-ui";
import { valuePropType } from "../propTypes";

/**
 * A swatch to render a `textStyle` variant. Provide the sample text as `children`.
 * @param value
 * @param componentCSS
 * @param rest
 * @return React.Element
 * @constructor
 */
const TextStyleSwatch = ({ value, css: componentCSS, ...rest }) => (
	<p
		css={css({
			alignSelf: "center",
			m: 0,
			...value,
			...componentCSS
		})}
		{...rest}
	/>
);

TextStyleSwatch.propTypes = {
	...valuePropType
};

/** @component */
export default TextStyleSwatch;
