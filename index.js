console.log("Hello, world!")

console.log("=======================")
console.log("== Variables")
console.log("=======================\n")

var n = 16
console.log("== n:", n)
console.log("== typeof(n):", typeof(n))

n = "This is a string"
console.log("== n:", n)
console.log("== typeof(n):", typeof(n))

console.log("=======================")
console.log("== Numbers")
console.log("=======================\n")

var n1 = 5
var n2 = 9

console.log("== typeof(n1):", typeof(n1))
console.log("== typeof(n2):", typeof(n2))

console.log("== n2 / n1:", n2 / n1)

var tenStr = "10"
var tenNum = parseInt(tenStr)
console.log("== typeof(tenNum):", typeof(tenNum))
console.log("== tenNum:", tenNum)


console.log("=======================")
console.log("== Comparisons")
console.log("=======================\n")

var twoNum = 2
var threeNum = 3
var twoStr = "2"
console.log("== twoNum == threeNum:", twoNum == threeNum)
console.log("== twoNum == twoStr:", twoNum == twoStr)
console.log("== twoNum === twoStr:", twoNum === twoStr)
console.log("== twoNum != twoStr:", twoNum != twoStr)
console.log("== twoNum !== twoStr:", twoNum !== twoStr)

console.log("=======================")
console.log("== Strings")
console.log("=======================\n")

var greeting = "'Hello,'"
var name = 'CS "290"'
var longStr = greeting + " " + name
console.log("== longStr:", longStr)

var strPlusNum = "This is a number: " + 123
console.log("== strPlusNum:", strPlusNum)
console.log("== strPlusNum.length:", strPlusNum.length)
console.log("== strPlusNum[10]:", strPlusNum[10])
strPlusNum[10] = 'x'
console.log("== strPlusNum[10]:", strPlusNum[10])

var decathlon = "decathlon"
console.log("== decathlon.indexOf('cat'):", decathlon.indexOf('cat'))

var team = "team"
console.log("== team.indexOf('i'):", team.indexOf('i'))

var statementOfAffection = "I love dogs"
console.log("== statementOfAffection.replace('dog', 'cat'):", statementOfAffection.replace('dog', 'cat'))
console.log("== statementOfAffection:", statementOfAffection)

statementOfAffection = statementOfAffection.replace('dog', 'cat')
console.log("== statementOfAffection:", statementOfAffection)

console.log("=======================")
console.log("== Functions")
console.log("=======================\n")

function foo() {
    console.log("== Inside foo!")
}

foo()

function sum(a, b, c) {
    if (c) {
        return a + b + c
    } else if (b) {
        return a + b
    } else {
        return a
    }
}

console.log("== sum(1, 2, 3):", sum(1, 2, 3))
console.log("== sum('1', '2', '3'):", sum('1', '2', '3'))
console.log("== sum('1', 2, '3'):", sum('1', 2, '3'))
console.log("== sum(1, 2):", sum(1, 2))
console.log("== sum('1', '2'):", sum('1', '2'))

var fn = function () {
    console.log("== JS has first class functions")
}
console.log("== fn:", fn)
console.log("== typeof(fn):", typeof(fn))
fn()

function higherOrderFn(fnArg) {
    console.log("== Inside higherOrderFn:", fnArg)
    fnArg()
}

higherOrderFn(foo)
// higherOrderFn(foo())
higherOrderFn(function () {
    console.log("== This is an anonymous function")
})

console.log("=======================")
console.log("== Arrays")
console.log("=======================\n")

var array = [1, '2', [4, 5, 6]]
console.log("== array:", array)
console.log("== array.length:", array.length)
console.log("== typeof(array):", typeof(array))

for (var i = 0; i < array.length; i++) {
    console.log("== array[" + i + "]:", array[i])
}

console.log("== Using forEach():")
array.forEach(function (elem, idx) {
    console.log("  - elem:", elem, ", idx:", idx)
})

function printArrayElem(elem, idx) {
    console.log("  - elem:", elem, ", idx:", idx)
}

console.log("== Using forEach() with named function:")
array.forEach(printArrayElem)

console.log("=======================")
console.log("== Objects")
console.log("=======================\n")

var obj = {
    'cat': 'cute',
    'dog': 'loyal',
    'lizard': 'weird'
}
console.log("== obj['cat']:", obj['cat'])

var person = {
    firstName: "Luke",
    lastName: "Skywalker",
    age: 23,
    getFullName: function () {
        return this.firstName + " " + this.lastName
    }
}
console.log("== person['firstName']:", person['firstName'])
console.log("== person.firstName:", person.firstName)
person.age = 24
console.log("== person.age:", person.age)
console.log("== person.getFullName():", person.getFullName())

var fieldName = "firstName"
console.log("== person[fieldName]:", person[fieldName])

console.log("=======================")
console.log("== Classes")
console.log("=======================\n")

function Person(firstName, lastName) {
    this.firstName = firstName
    this.lastName = lastName
}

Person.prototype.getFullName = function () {
    return this.firstName + " " + this.lastName
}

var p1 = new Person("Leia", "Organa")
console.log("== p1.firstName:", p1.firstName)
console.log("== p1.lastName:", p1.lastName)
console.log("== p1.getFullName():", p1.getFullName())
console.log("== p1:", p1)

var p2 = new Person("Rey", "???")
console.log("== p2.firstName:", p2.firstName)
console.log("== p2.lastName:", p2.lastName)
console.log("== p2.getFullName():", p2.getFullName())
