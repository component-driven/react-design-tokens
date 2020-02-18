import styled from "@emotion/styled";
import { css } from "@styled-system/css";
import { typography, variant, compose } from "styled-system";

export const textStyles = {
	body: {
		fontFamily: "body",
		fontSize: "md",
		fontWeight: "normal",
		color: "text"
	},
	heading: {
		fontFamily: "heading",
		fontSize: "xl",
		fontWeight: "bold",
		color: "secondary"
	}
};

const Text = styled.p(
	css({
		m: 0,
		lineHeight: 1.5
	}),
	compose(
		variant({
			prop: "textStyle",
			variants: textStyles
		}),
		typography
	)
);

export default Text;
