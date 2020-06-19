function sayHello() {
    return function {
        console.log(fnMessage())
    }
}

let fn = sayHello()
let message = fn()