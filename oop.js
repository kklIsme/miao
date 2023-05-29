//Vector
class Vector {
  constructor(x, y) {
    this.x = x
    this.y = y
  }

  plus(vector) {
    // 'this' is also a vector
    var x = this.x + vector.x
    var y = this.y + vector.y
    return new Vector(x, y)
  }

  minus(vector) {
    // 'this' is also a vector
    var x = this.x - vector.x
    var y = this.y - vector.y
    return new Vector(x, y)
  }

  get length() {
    return Math.sqrt(this.x * this.x + this.y * this.y)
  }

}
var a = new Vector(2, 3)
var b = new Vector(3, -1)

//Complex
class Complex {
  constructor(real, imag) {
    this.real = real
    this.imag = imag
  }

  plus(c) {
    var real = this.real + c.real
    var imag = this.imag + c.imag
    return new Complex(real, imag)
  }

  minus(c) {
    var real = this.real - c.real
    var imag = this.imag - c.imag
    return new Complex(real, imag)
  }

  mul(c) {
    var real = this.real * c.real - this.imag * c.imag
    var imag = this.real * c.imag + this.imag * c.real
    return new Complex(real, imag)
  }

  div(c) {
    var helper = new Complex(c.real, -c.imag)
    var up = this.mul(helper)
    var down = c.mul(helper) // down的虚部应该是0
    var real = up.real / down.real
    var imag = up.imag / down.real
    return new Complex(real, imag)
  }
}
var x = new Complex(2, 3)
var y = new Complex(2, 3)

//LinkedList
class LinkedList {
  constructor(head, tail) {
    this.head = null
    this.tail = null
  }

  append(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    } else {
      this.tail.next = node
      this.tail = node //注意是让node成为尾结点 因此node在等号右边
      return
    }
  }

  prepend(val) {
    var node = {
      val, next: null
    }
    if (this.head == null) {
      this.head = this.tail = node
      return
    } else {
      node.next = this.head
      this.head = node //注意是让node成为头结点 因此node在等号右边
      return
    }
  }

  pop() {
    if (this.head == null) {
      return
    }
    if (this.head == this.tail) {
      this.head = null
      return
    } else {
      var secondLast = this.head
      while (secondLast.next.next) {
        secondLast = secondLast.next
      }
      var result = secondLast.next.val
      secondLast.next = null
      this.tail = secondLast
      return result
    }
  }

  shift() {
    if (this.head == null) {
      return
    }
    if (this.head == this.tail) {
      this.haed = null
      return
    } else {
      var result = this.head.val
      this.head = this.head.next
      return result
    }
  }

  at(idx) {
    var p = this.head
    var count = 0
    while (count < idx) {
      p = p.next
      count++
    }
    return p.val
  }

  get length() {
    var p = this.head
    var l = 0
    while (p) {
      l++
      p = p.next
    }
    return l
  }
}

//Queue
class Queue {
  constructor(head, next) {
    this.head = null
    this.tail = null
    this.nodeCount = 0
  }

  // 添加一个元素到队列中
  add(val) {
    var node = {
      val, next: null
    }
    this.nodeCount++

    if (this.head == null) {
      this.head = this.tail = node
    } else {
      this.tail.next = node
      this.tail = node
    }
  }

  // 从队列中取出一个元素，先添加的是先被取出的
  // 队列为空时返回undefined
  pop() {
    // 没有结点时
    if (this.head == null) {
      return
    }
    this.nodeCount--
    // 只有一个结点时
    if (this.head == this.tail) {
      var result = this.head.val
      this.head = this.tail = null
      return result
    }

    var result = this.head.val
    this.head = this.head.next
    return result
  }

  // 返回队列的长度

  get size() {
    return this.nodeCount

  }

}

// 用链表实现一个栈
// 只有两个操作：
// 进栈，出栈
// 后进先出
// 其每一个操作的时间复杂度都为O（1）
class Stack {
  constructor(head) {
    this.head = null
    this.nodeCount = 0
  }

  // 添加一个元素到栈中
  push(val) {
    var node = {
      val, next: null
    }
    this.nodeCount++
    if (this.head == null) {
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  // 从栈中取出一个元素，先添加的是后被取出的
  // 栈为空时返回undefined
  pop() {
    if (this.head == null) {
      return undefined
    }
    this.nodeCount--
    var result = this.head.val
    this.head = this.head.next
    return result
  }

  // 返回栈的长度
  get size() {
    return this.nodeCount
  }

}


//MySet
class MySet {
  constructor() {
    this.elements = []
  }

  add(val) {
    if (!(this.has(val))) {
      this.elements.push(val)
    }
  }

  remove(val) {
    if (this.has(val)) {
      var idx = this.elements.indexOf(val)
      this.elements.splice(idx, 1)
      return true
    }
    return false
  }

  has(val) {
    return this.elements.includes(val)

  }

  get size() {
    return this.elements.length

  }
}

//MyMap
class MyMap {
  constructor() {
    this.keys = []
    this.vals = []
  }

  set(key, val) {
    if (!this.has(key)) {
      this.keys.push(key)
      this.vals.push(val)
    } else {
      this.idx = this.keys.indexOf(key)
      this.vals[this.idx] = val
    }
  }

  get(key) {
    this.idx = this.keys.indexOf(key)
    return this.vals[this.idx]
  }

  has(key) {
    if (this.keys.includes(key)) {
      return true
    }
    return false
  }

  delete(key) {
    if (this.has(key)) {
      this.idx = this.keys.indexOf(key)
      this.keys.splice(this.idx, 1)
      this.vals.splice(this.idx, 1)
      return true
    } else {
      return undefined
    }
  }

  get size() {
    return this.keys.length
  }
}
