var kklisme = {

  compact: function (array) {
    var result = []
    for (var item of array) {
      if (item == false || item == null || item == 0 || item == '' || item == undefined || item == NaN) {
        continue
      } else {
        result.push(item)
      }
    }
    return result
  },

  chunk: function (ary, size) {
    var result = []
    for (var i = 0; i < ary.length; i += size) {
      result.push(ary.slice(i, i + size))
    }
    return result
  },

  fill: function (ary, value, start = 0, end = ary.length) {
    for (var i = start; i < end; i++) {
      ary[i] = value
    }
    return ary
  },

  drop: function (ary,n = 1) {
    ary = ary.slice(n,ary.length)
    return ary
  },

  // findIndex: function (ary, predicate = it => it, fromIndex = 0) {
  //   for(var i = 0;i < ary.length;i++){
  //     if( predicate(ary[i]) ){
  //       return i
  //     }
  //   }
  // },






}
