let a = 8
let b = 3

basic.forever(function () {
    let b = 7
    let c = a.toString()
    printA()
    a = 3
    pause(5000)
})

function printA() {
    basic.showNumber(a)
}