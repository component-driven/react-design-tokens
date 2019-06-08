const path = require("path");
const reactDocgenTS = require("react-docgen-typescript");
const pkg = require("./package.json");

module.exports = {
	title: pkg.name,
	propsParser: reactDocgenTS.withCustomConfig(
		path.join(__dirname, "tsconfig.json"),
		{
			componentNameResolver: (exp, source) =>
				exp.getName() === "StyledComponentClass" &&
				reactDocgenTS.getDefaultExportForFile(source)
		}
	).parse,
	getComponentPathLine(componentPath) {
		const name = path.basename(componentPath, ".jsx");
		return `import { ${name} } from '${pkg.name}';`;
	},
	skipComponentsWithoutExample: true,
	styleguideComponents: {
		Wrapper: path.join(__dirname, "styleguide", "Provider.jsx")
	},
	sections: [
		{
			name: "Introduction",
			content: "Readme.md"
		},
		{
			name: "Components",
			components: "src/lib/*.jsx"
		},
		{
			name: "Examples",
			components: "src/components/*.jsx"
		}
	],
	ribbon: {
		url: "https://github.com/component-driven/react-design-tokens"
	}
};
