function getModule(path) {
  return new Promise(resolve => {
    require.ensure([], function __import() {
      resolve(require('test-module').default);
    });
  });
}

getModule().then(() => {});
