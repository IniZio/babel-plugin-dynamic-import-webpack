const MODULE = 'test-module';

new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require(MODULE).default || require(MODULE));
  });
});
new Promise(resolve => {
  require.ensure([], function __import() {
    resolve(require(`test-${MODULE}`).default || require(`test-${MODULE}`));
  });
});
