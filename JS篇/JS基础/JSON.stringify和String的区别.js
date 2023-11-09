// JSON.stringify 和 String 的区别

JSON.stringify({a: 1, b: 2}) // '{"a":1,"b":2}'
String({a: 1, b: 2}) // [Object Object]

JSON.stringify([1, 2, 3, 4, 5]) // '[1, 2, 3, 4, 5]'
String([1, 2, 3, 4, 5]) // '1, 2, 3, 4, 5'

JSON.stringify("abc") // 'abc'
String("abc") // '"abc"'

const a = {
  b: 'bbb',
  toString: function () {
    return 'aaa'
  }
}
JSON.stringify(a) // {"b":"bbb"}
String(a) // 'aaa'