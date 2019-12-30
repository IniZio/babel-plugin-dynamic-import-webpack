const MODULE = 'test-module';

new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require(MODULE).default);
  });
});
new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require(`test-${MODULE}`).default);
  });
});
