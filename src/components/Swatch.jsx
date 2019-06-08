import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import copy from "clipboard-copy";
import { css } from "theme-ui";

const SwatchBase = styled("div")`
	&:hover,
	&:active,
	&:focus {
		outline: 0;
		box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.7);
		cursor: pointer;
	}
`;

function Swatch(props) {
	console.log(props);
	return (
		<SwatchBase
			{...props}
			onClick={() => copy(props.token)}
			css={css({
				"&:hover, &:active, &:focus": {
					bg: "muted"
				}
				// fontFamily: "body",
				// fontSize: "md"
			})}
		/>
	);
}

Swatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

export default Swatch;
