const alias = require('@rollup/plugin-alias');
const copy = require('rollup-plugin-copy');

module.exports = {
  rollup(config, options) {
    config.plugins.push({
      plugins: [
        alias({
          entries: [{ find: /@\//, replacement: /src\// }],
        }),
      ],
    });

    config.plugins.push(
      copy({
        targets: [{ src: 'assets/scss/**', dest: 'dist/scss' }],
        copySync: true
      })
    );

    //Do not treat absolute paths as external modules
    return {
      ...config,
      external: (id) => !id.startsWith('@/') && config.external(id),
    };
  },
};
