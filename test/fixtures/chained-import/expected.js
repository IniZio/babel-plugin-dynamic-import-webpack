new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-module').default);
  });
}).then(() => new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-module-2').default);
  });
}));

Promise.all([new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-1').default);
  });
}), new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-2').default);
  });
}), new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require('test-3').default);
  });
})]).then(() => {});
