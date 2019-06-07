import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { ThemeProvider } from "emotion-theming";
import { fontSize } from "styled-system";
import copy from "clipboard-copy";
import theme from "../components/theme";
import Stack from "stack-styled/emotion/Stack";

const FontSwatchContainer = styled.button`
	display: flex;
	align-items: center;
	padding: 0.25rem 0.5rem;
	font: inherit;
	border: 0;
	background: none;
	text-align: left;
	line-height: 1;

	&:hover,
	&:active,
	&:focus {
		cursor: pointer;
		background: #efefef;
	}
`;

const SampleText = styled.p`
	${fontSize};
`;

const FontSwatch = ({ value, token, children }) => (
	<Stack gap={4} gridTemplateColumns="1fr 5fr" onClick={() => copy(token)}>
		<Stack gap={2}>
			{token}
			{value}
		</Stack>
		<SampleText fontSize={value}>{children}</SampleText>
	</Stack>
);

FontSwatch.propTypes = {
	token: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired
};

/** @component */
export default FontSwatch;
