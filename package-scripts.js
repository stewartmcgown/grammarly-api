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
    },
    build: {
      default: {
        script: series('nps build.prebuild', 'tsc -p tsconfig.build.json')
      },
      prebuild: {
        script: rimraf('./build')
      }
    }
  }
};

function tslint(path) {
  return `tslint -c ./tslint.json ${path} --format stylish`;
}
