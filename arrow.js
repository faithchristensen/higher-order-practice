const dragonEvents = [
    { type: 'attack', value: 12, target: 'player-1' },
    { type: 'eat', value: 20, target: 'horse' },
    { type: 'attack', value: 40, target: 'player-2' },
    { type: 'attack', value: 23, target: 'player-1' }
]

const totalDamagePlayerOne = dragonEvents 
    .filter((event) => event.type === 'attack')
    .filter((event) => event.target === 'player-1')
    .map((event) => event.value)
    .reduce((prev, value) => prev + value, 0)

    console.log(totalDamagePlayerOne)