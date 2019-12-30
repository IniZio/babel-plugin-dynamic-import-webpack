const testModule = new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-module').default);
  });
});
