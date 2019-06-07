const path = require('path');
const reactDocgenTS = require('react-docgen-typescript');
const pkg = require('./package.json')

module.exports = {
    title: pkg.name,
    propsParser: reactDocgenTS.withCustomConfig(
        path.join(__dirname, 'tsconfig.json'),
        {
            componentNameResolver: (exp, source) =>
                exp.getName() === 'StyledComponentClass' &&
                reactDocgenTS.getDefaultExportForFile(source),
        }
    ).parse,
    getComponentPathLine(componentPath) {
        const name = path.basename(componentPath, '.tsx');
        return `import { ${name} } from '${pkg.name}';`;
    },
    skipComponentsWithoutExample: true,
    sections: [
        {
            name: 'Introduction',
            content: 'Readme.md',
        },
        {
            name: 'Components',
            components: 'src/components/*.tsx',
        },
    ],
    ribbon: {
        url: 'https://github.com/component-driven/react-design-tokens',
    },
};
