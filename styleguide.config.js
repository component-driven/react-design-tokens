const fs = require("fs");
const path = require("path");
const pkg = require("./package.json");

module.exports = {
	title: pkg.name,
	serverPort: 6061,
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
			content: path.join(__dirname, "Readme.md")
		},
		{
			name: "Components",
			components: "src/components/*.jsx"
		},
		{
			name: "Examples",
			content: path.join(__dirname, "src/examples/Readme.md")
		}
	],
	ribbon: {
		url: "https://github.com/component-driven/react-design-tokens"
	},
	updateExample(props, exampleFilePath) {
		// props.settings are passed by any fenced code block, in this case
		const { settings, lang } = props;
		// "../mySourceCode.js"
		if (typeof settings.file === "string") {
			// "absolute path to mySourceCode.js"
			const filepath = path.resolve(exampleFilePath, settings.file);
			// displays the block as static code
			settings.static = true;
			// no longer needed
			delete settings.file;
			return {
				content: fs.readFileSync(filepath, "utf8"),
				settings,
				lang
			};
		}
		return props;
	}
};
