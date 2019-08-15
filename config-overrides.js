const { override, fixBabelImports } = require('customize-cra');

/* antd */
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
);

/* react-app-rewire-yaml */

const rewireYAML = require('react-app-rewire-yaml');

module.exports = function override(config, env) {
    // ...
    config = rewireYAML(config, env);
    // ...
    return config;
};