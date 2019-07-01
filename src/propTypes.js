import PropTypes from "prop-types";

/**
 * Design token name
 * See https://theme-ui.com/theme-spec
 *  */
export const tokenPropType = {
	token: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired
};

/**
 * The value to render inside the swatch
 *  */
export const valuePropType = {
	value: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.number,
		PropTypes.object,
		PropTypes.array
	]).isRequired
};
