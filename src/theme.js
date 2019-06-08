import { modularScale } from "polished";

const scale = value => modularScale(value, "1rem", "goldenSection");

const palette = {
	slate: {
		darker: "#11161A",
		dark: "#1F2932",
		base: "#2E3D49",
		light: "#6D7780",
		lighter: "#B4B9BD",
		lightest: "#F7F7F8"
	}
};
export default {
	fontSizes: {
		xl: scale(3),
		lg: scale(1),
		md: scale(0),
		sm: scale(-0.5),
		xs: scale(-0.75)
	},
	fonts: {
		body: "system-ui, sans-serif",
		heading: '"Avenir Next", sans-serif',
		monospace: "Menlo, monospace"
	},
	space: [
		0,
		"0.125rem", // 2px
		"0.25rem", // 4px
		"0.5rem", // 8px
		"1rem", // 16px
		"2rem", // 32px
		"4rem", // 64px
		"8rem", // 128px
		"16rem" // 256px
	],
	colors: {
		...palette,
		text: palette.slate.base,
		background: palette.slate.lightest,
		primary: "#E53935",
		secondary: palette.slate.light,
		muted: palette.slate.lighter
	}
};
