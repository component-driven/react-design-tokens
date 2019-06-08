import React from "react";
import { ThemeProvider } from "theme-ui";
import theme from "../src/theme";

function Provider({ children }) {
	return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

export default Provider;
