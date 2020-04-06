import React from "react";
import PropTypes from "prop-types";
import { Swatches, ColorSwatch } from "../index";
import { tokenPropType, valuePropType } from "../propTypes";

export const PaletteSwatch = ({ token, value, aliasesKey }) => (
	<Swatches items={value} aliasesKey={aliasesKey}>
		{(key, value, aliases) => (
			<ColorSwatch
				value={value}
				token={`${token}.${key}`}
				aliases={
					Array.isArray(aliases)
						? aliases.map(alias => `${token}.${alias}`)
						: aliases && `${token}.${aliases}`
				}
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
