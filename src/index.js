const character = {
    name: 'Лучник',
    type: 'Bowman',
    health: 50,
    level: 3,
    attack: 40,
    defence: 10,
    special: [
        {
            id: 8,
            name: 'Двойной выстрел',
            icon: 'http://...',
            description: 'Двойной выстрел наносит двойной урон'
        },
        {
            id: 9,
            name: 'Нокаутирующий удар',
            icon: 'http://...'
            // <- обратите внимание, описание "засекречено"
        }
    ]
}

function getOptions(id, object) {
    const array = object.special;
    let obj = {};
    for (let key in array) {
        if (array[key].id == id) {
            obj = array[key];
        }
    }
    if (!('description' in obj)) {
        obj.description = 'Описание недоступно';
        console.log(obj)
    }
    return Object.entries(obj)
}

console.log(getOptions(9,character));