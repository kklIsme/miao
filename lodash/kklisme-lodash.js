var kklisme = {
  compact: function (array) {
    var result = [];
    for (var item of array) {
      if (
        item == false ||
        item == null ||
        item == 0 ||
        item == "" ||
        item == undefined ||
        isNaN(item)
      ) {
        continue;
      } else {
        result.push(item);
      }
    }
    return result;
  },

  chunk: function (array, size) {
    var result = [];
    for (var i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  },

  fill: function (array, value, start = 0, end = array.length) {
    for (var i = start; i < end; i++) {
      array[i] = value;
    }
    return array;
  },

  drop: function (array, n = 1) {
    array = array.slice(n, array.length);
    return array;
  },

  // findIndex: function (array, predicate = it => it, fromIndex = 0) {
  //   for(var i = 0;i < array.length;i++){
  //     if( predicate(array[i]) ){
  //       return i
  //     }
  //   }
  // },

  // findLastIndex: function (array, predicate = it => it, fromIndex = 0) {
  //
  // },

  flatten: function (array) {
    var result = [];
    for (var item of array) {
      if (Array.isArray(item)) {
        for (var val of item) {
          result.push(val);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  },

  flattenDeep: function (array) {
    var result = [];
    for (var item of array) {
      if (Array.isArray(item)) {
        var flattedItem = this.flattenDeep(item);
        for (var val of flattedItem) {
          result.push(val);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  },

  flattenDepth: function (array, depth = 1) {
    if (depth == 0) {
      return array.slice();
    }
    var result = [];
    for (var item of array) {
      if (Array.isArray(item)) {
        var flattedItem = this.flattenDepth(item, depth - 1);
        for (var val of flattedItem) {
          result.push(val);
        }
      } else {
        result.push(item);
      }
    }
    return result;
  },

  fromPairs: function (pairs) {
    var res = {};

    for (var i = 0; i < pairs.length; i++) {
      var key = pairs[i][0];
      res[key] = pairs[i][1];
    }
    return res;
  },

  toPairs: function (object) {
    var res = [];
    var obj = Object.keys(object); //Object.keys()静态方法返回一个由给定对象自身的可枚举的字符串键属性名组成的数组。
    for (var i = 0; i < obj.length; i++) {
      var key = obj[i];
      res[i] = [];
      res[i][0] = key;
      res[i][1] = object[key];
    }

    return res;
  },

  head: function (array) {
    if (!array) {
      return undefined;
    }

    return array[0];
  },

  indexOf: function (array, value, fromIndex = 0) {
    var res = 0
    if (fromIndex >= 0) {
        for (var i = fromIndex; i < array.length; i++) {
            if (array[i] == value) {
                res = i
                return res
            }
        }
        return -1
    } else {
      if(fromIndex % array.length !== 0){
        return this.indexOf(array, value, fromIndex += array.length)
      }else{
        return this.indexOf(array, value, fromIndex = 0)
      }
    }
  },

  // lastIndexOf: function (array, value, fromIndex = array.length - 1) {
  //   var res = 0;
  //   if (fromIndex >= 0) {
  //     for (var i = fromIndex; i >= 0; i--) {
  //       if (array[i] == value) {
  //         res = i;
  //         return res;
  //       }
  //     }
  //     return -1;
  //   }
  // },
};
