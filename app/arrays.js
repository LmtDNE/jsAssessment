

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
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function(arr) {
    arr.shift();
    return  arr;
  },

  concat: function(arr1, arr2) {
     return [...arr1,...arr2];
  },

  insert: function(arr, item, index) {
    // console.log('This is arr', arr.length);
    // console.log('This is item', item);
    // console.log('This is index', index);
    arr.splice(index, 0, item);
    return arr;
  },

  count: function(arr, item) {
    var count = arr.filter((element) => {
      return element === item;
    });
    return count.length;
  },

  duplicates: function(arr) {
   console.log("This is arr", arr);
   var result = [];
   var hash = {}

   arr.forEach(element => {
    if(!hash.hasOwnProperty(element)) {
      console.log('This is the element', element)
      hash[element] = element
    }else{
      if(!result.includes(element)) {
        result.push(element)
      }
    }
   });
   console.log('This is result', result);
   return result;
  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
