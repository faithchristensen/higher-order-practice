var orders = [
    { amount: 250 },
    { amount: 400 },
    { amount: 100 },
    { amount: 325 }
]

var totalAmount = orders.reduce(function(sum, order) {
    return sum + order.amount
}, 0)

console.log(totalAmount)

//---------------------------------------------------------------

var icecreams = [
    { number: 11 },
    { number: 21 },
    { number: 47 },
    { number: 52 }
]

var totalIcecreams = icecreams.reduce(function(sum, icecream) {
    return sum + icecream.number
}, 0)

console.log(totalIcecreams)