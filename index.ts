// normal syntax
console.log('hello world')

for (let i = 0; i < 10; i++) {
  console.log(i)
}

// string to number

let hoge = 'string'

hoge = 1
hoge = true

// array
let numberSeq = [1, 2, 3, 4]

numberSeq = [1, 2, 3]
numberSeq = ['ichiro', 'jiro', 'sabro']

// object
let profile = { name: 'ichiro', age: 12 }

profile = { name: 'fuga', age: 13 }
profile = { name: 'fuga', age: 13, gender: 'male' }

// Class
class Human {
  breeth() {
    console.log('breeth')
  }
}

class Robot {
  run() {
    console.log('run')
  }
}

let something = new Human()

something = new Robot()


// Type Inference
let greeding = "Good Morning"

let greeding2: string = "Good Morning"

// Null Safe

