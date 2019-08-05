const { override, fixBabelImports } = require('customize-cra');

/* antd */
module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
    })
);

/* webpack build */
// module.exports = override({
//     entry:'./src/script/main.js',
//     output:{
//         path:'./dist/js',
//         filename:'sakura.main.js',
//     }
// });

/* react-app-rewire-yaml */

const rewireYAML = require('react-app-rewire-yaml');

module.exports = function override(config, env) {
    // ...
    config = rewireYAML(config, env);
    // ...
    return config;
};