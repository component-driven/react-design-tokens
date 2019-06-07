import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { fontSize } from "styled-system";
import copy from "clipboard-copy";
import Stack from "stack-styled/emotion/Stack";
import { Swatch } from "./";

const SampleText = styled("p")`
	${fontSize};
`;

const FontSizeSwatch = ({ value, token, children }) => (
	<Swatch value={value} token={token}>
		<Stack gap={4} gridTemplateColumns="1fr 1fr" onClick={() => copy(token)}>
			<Stack gap={2}>
				<p>{token}</p>
				<p>{value}</p>
			</Stack>
			<SampleText fontSize={value}>{children}</SampleText>
		</Stack>
	</Swatch>
);

FontSizeSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default FontSizeSwatch;
