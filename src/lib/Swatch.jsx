import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { color, typography, space } from "styled-system";
import copy from "clipboard-copy";

const SwatchBase = styled("button")`
	border: none;
	text-align: left;
	${color};
	${typography};
	${space};
	&:hover,
	&:active,
	&:focus {
		outline: 0;
		box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.7);
		cursor: pointer;
	}
`;

function Swatch(props) {
	return <SwatchBase {...props} onClick={() => copy(props.token)} />;
}

Swatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

export default Swatch;
