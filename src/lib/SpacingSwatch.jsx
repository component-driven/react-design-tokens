import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { space } from "styled-system";
import copy from "clipboard-copy";
import Stack from "stack-styled/emotion/Stack";

const SpacingSwatchBox = styled.div`
	width: ${props => props.size};
	height: 1rem;
	border: 1px dashed #888;
	box-sizing: initial;
`;

const SwatchSubValue = styled.div`
	color: #767676;
	font-size: 0.85rem;
	${space};
`;

const SpacingSwatch = ({ token, value }) => {
	return (
		<Stack gap={4} gridTemplateColumns="1fr 5fr" onClick={() => copy(token)}>
			<Stack gap={1}>
				{token}
				<SwatchSubValue>{value}</SwatchSubValue>
			</Stack>
			<SpacingSwatchBox size={value} />
		</Stack>
	);
};

SpacingSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default SpacingSwatch;
