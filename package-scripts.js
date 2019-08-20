const { series, rimraf } = require('nps-utils');

module.exports = {
  scripts: {
    test: {
      default: {
        script: series('nps test.pretest', 'nps test.run'),
        description: 'Runs the unit tests'
      },
      pretest: {
        script: tslint(`./test/unit/**.ts`)
      },
      run: {
        script: 'cross-env NODE_ENV=test jest tests'
      }
    }
  }
};

function tslint(path) {
  return `tslint -c ./tslint.json ${path} --format stylish`;
}
