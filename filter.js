var animals = [
    { name: 'fluffykins', species: 'rabbit' },
    { name: 'Caro', species: 'dog' },
    { name: 'Hamilton', species: 'dog' },
    { name: 'Harold', species: 'fish' },
    { name: 'Ursela', species: 'cat' },
    { name: 'Jimmy', species: 'fish'}
]

var isDog = function(animal) {
    return animal.species === 'dog'
}

var dogs = animals.filter(isDog);


var isCat = function(animal) {
    return animal.species === 'cat'
}

var cats = animals.filter(isCat);

console.log({ dogs: dogs, cats: cats })

//------------------------------------------------

var coolPeople = [
    { name: 'Hus', hobby: 'guitar' },
    { name: 'Paul', hobby: 'eating tp' },
    { name: 'Gwynne Shotwell', hobby: 'areospace engineering' },
    { name: 'Totoro', hobby: 'flying' },
    { name: 'Tesla', hobby: 'electricity' },
    { name: 'Jack Black', hobby: 'guitar'},
    { name: 'Annie Clark', hobby: 'guitar'} 
]

var guitarPlayer = coolPeople.filter(function (people) {
    return people.hobby === 'guitar'
})

console.log(guitarPlayer)