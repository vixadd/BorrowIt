;(function (global) {
  System.config({
    transpiler: 'plugin-babel',

    map: {
      'plugin-babel': 'npm:systemjs-plugin-babel/plugin-babel.js',
      'systemjs-babel-build': 'npm:systemjs-plugin-babel/systemjs-babel-browser.js'
    }
  });
})(this);
