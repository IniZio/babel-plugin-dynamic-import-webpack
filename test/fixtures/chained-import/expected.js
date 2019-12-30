new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-module').default || require('test-module'));
  });
}).then(() => new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-module-2').default || require('test-module-2'));
  });
}));

Promise.all([new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-1').default || require('test-1'));
  });
}), new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-2').default || require('test-2'));
  });
}), new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-3').default || require('test-3'));
  });
})]).then(() => {});
