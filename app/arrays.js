

exports = typeof window === 'undefined' ? global : window;


exports.arraysAnswers = {
  indexOf: function(arr, item) {
    var index = -1
    if(arr.includes(item)) {
      for(var i = 0; i < arr.length; i++) {
        if(arr[i] === item) {
          index = i;
          break;
        }
      }
    }
   
    return index;
  },

  sum: function(arr) {
    return arr.reduce((a, b) => {
      return a + b;
    });

  },

  remove: function(arr, item) {
    return arr.filter((element)=> {
      return element !== item;
    });
  },

  removeWithoutCopy: function(arr, item) {
    while(arr.includes(item)) {
      arr.splice(arr.indexOf(item), 1);

    }
    return arr;
  },

  append: function(arr, item) {
    arr.push(item);
    return arr;
  },  

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
