var kklisme = {
  swap: function (array, i, j) {
    var t = array[i];
    array[i] = array[j];
    array[j] = t;
  },

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

  findIndex: function (array, predicate, fromIndex = 0) {
    for (let i = fromIndex; i < array.length; i++) {
      if (Array.isArray(predicate)) {
        if (predicate[0] in array[i] && predicate[1] == array[i][ predicate[0] ]) {  //&&前为判断键是否存在，&&后面为判断值是否相等
          return i;
        }
      }

      if (typeof predicate == "object") {
        let flat = true;
        for (let key in predicate) {
          if (array[i][key] !== predicate[key]) { //通过对象属性名，用[key]获取对象的值判断值是否相等
            flat = false;
          }
        }
        if (flat) {
          return i;
        }
      }
      if (typeof predicate == "string") {
        if (predicate in array[i] && array[i][predicate]) {
          return i;
        }
      }
      if (typeof predicate == "function") {
        for (let i = fromIndex; i < array.length; i++) {
          if (predicate(array[i])) {
            return i;
          }
        }
      }
    }
    return -1
  },

  findLastIndex: function (array, predicate, fromIndex = array.length - 1) {
    for (let i = fromIndex; i >= 0; i--) {
      if (Array.isArray(predicate)) {
        if (predicate[0] in array[i] && predicate[1] == array[i][ predicate[0] ]) {  //&&前为判断键是否存在，&&后面为判断值是否相等
          return i;
        }
      }

      if (typeof predicate == "object") {
        let flat = true;
        for (let key in predicate) {
          if (array[i][key] !== predicate[key]) { //通过对象属性名，用[key]获取对象的值判断值是否相等
            flat = false;
          }
        }
        if (flat) {
          return i;
        }
      }
      if (typeof predicate == "string") {
        if (predicate in array[i] && array[i][predicate]) {
          return i;
        }
      }
      if (typeof predicate == "function") {
          if (predicate(array[i])) {
            return i;
        }
      }
    }
    return -1
  },

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
    for(let i = fromIndex < 0 ? fromIndex + array.length : fromIndex;i < array.length;i++){
      if(array[i] == value){
        return i
      }
    }
    return -1
  },

  lastIndexOf: function (array, value, fromIndex = array.length - 1) {
    for(let i = fromIndex < 0 ? fromIndex + array.length : fromIndex;i >= 0;i--){
      if(array[i] == value){
        return i
      }
    }
    return -1
  },

  initial: function (array) {
    return array.slice(0, -1);
  },

  join: function (array, separator = ",") {
    var res = "";
    if (typeof separator == "number") {
      for (var item of array) {
        item = item + String(separator);
        res += item;
      }
    } else {
      for (var item of array) {
        item += separator;
        res += item;
      }
    }

    return res.slice(0, -1);
  },

  last: function (array) {
    var last = array.length - 1;
    return array[last];
  },

  pull: function (array, ...args) {
    //利用剩余参数
    for (var i = 0; i < args.length; i++) {
      for (var j = 0; j < array.length; j++) {
        if (args[i] == array[j]) {
          array.splice(j, 1);
        }
      }
    }
    return array;
  },

  reverse: function (array) {
    var i = 0;
    var j = array.length - 1;
    while (i < j) {
      this.swap(array, i, j);
      i++;
      j--;
    }
    return array;
  },

  // every: function (collection,predicate){
  //   for(var item of collection){
  //       if(Array.isArray(predicate)){
  //         if(predicate[0] in item && predicate[1] == item[ predicate[0] ]){
  //           result = true
  //         }
  //       }
  //       if(typeof predicate == 'object'){
  //         for(let key in predicate){
  //           if(item[key] !== predicate[key]){
  //             result = false
  //           }
  //         }
  //       }
  //       if(typeof predicate == 'string'){

  //       }
  //       if(typeof predicate == 'function'){
  //         if(!predicate(item)){
  //           result = false
  //         }
  //       }
  //   }
  //   return true
  // },

  // some: function (collection,predicate){
  //   var result = false
  //   for(var item of collection){
  //     if( !predicate(item) ){
  //       result = true
  //       break
  //     }
  //   }
  //   return result
  // },

  countBy: function(collection,iteratee){
    let map = {}
    for(let item of collection){
      if(typeof iteratee == 'function'){
          item = iteratee(item)
        }else{
          item = item[iteratee] //item[iteratee],即item['length']等同于item.length
        }
        if(!(item in map)){
          map[item] = 1
        }else{
          map[item]++
        }
    }
    return map

  },

  groupBy: function(collection,iteratee){
    let map = {}
    let convertedItem
    for(let item of collection){
      if(typeof iteratee == 'function'){
          convertedItem = iteratee(item)
        }else{
          convertedItem = item[iteratee] //item[iteratee],即item['length']等同于item.length
        }
        if( !(convertedItem in map) ){
          map[convertedItem] = [item]
        }else{
          map[convertedItem].push(item)
        }
    }
    return map

  },
};
