exports = typeof window === 'undefined' ? global : window;

exports.functionsAnswers = {
  argsAsArray: function(fn, arr) {
   return fn.apply(null, arr);
  },

  speak: function(fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures: function(arr, fn) {
    let cbList = [];
    const innerFunction = (val) => {
      return () => { return fn(val); };
    };
    for (let i = 0, len = arr.length; i < len; i++) {
      cbList.push(innerFunction(arr[i]));
    }
    return cbList;
  },

  partial: function(fn, str1, str2) {

  },

  useArguments: function() {

  },

  callIt: function(fn) {

  },

  partialUsingArguments: function(fn) {

  },

  curryIt: function(fn) {

  }
};
