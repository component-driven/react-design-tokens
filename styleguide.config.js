const path = require("path");
const pkg = require("./package.json");

module.exports = {
	title: pkg.name,
	styleguideDir: path.join(__dirname, "docs"),
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
			components: "src/components/*.jsx"
		},
		{
			name: "Examples",
			content: "src/examples/Readme.md"
		}
	],
	ribbon: {
		url: "https://github.com/component-driven/react-design-tokens"
	}
};
