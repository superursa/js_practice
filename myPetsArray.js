let myPets = [
    {
        name: 'Banjo',
        species: 'dog',
        color: 'tuxedo',
        'coat type': 'curly',
        age: 1
    },
    {
        name: 'Sully',
        species: 'dog',
        color: 'cream and grey',
        'coat type': 'long hair',
        age: 3
    },
    {
        name: 'Kiki',
        species: 'cat',
        color: 'tabby',
        'coat type': 'long hair',
        age: 2
    },
    {
        name: 'Boba',
        species: 'cat',
        color: 'tuxedo',
        'coat type': 'short hair',
        age: 2
    },
    {
        name: 'Melonball',
        species: 'tree frog',
        color: 'green'
    }
]

myPets.sort(function (a, b) {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log(myPets);