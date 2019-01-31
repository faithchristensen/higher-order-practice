var animals = [
    { name: 'fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursela', species: 'cat' },
    { name: 'Jimmy', species: 'fish'}
]

var names = animals.map(function(animal) {
    return animal.name + ' is a ' + animal.species
})

// with es6
// var names = animals.map((animal) -> animal.name)

console.log(names)


//-------------------------

var vegetables = [
    { name: 'broccoli', color: 'green' },
    { name: 'green beans', color: 'green' },
    { name: 'bell peppers', color: 'red' },
    { name: 'celery', color: 'light green' },
    { name: 'chard', color: 'rainbow' }
]

var colors = vegetables.map(function(veget) {
    return veget.color + ' is the color of ' + veget.name
})

console.log(colors)