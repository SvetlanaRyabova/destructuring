export const character = {
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
      description: 'Двойной выстрел наносит двойной урон',
    },
    {
      id: 9,
      name: 'Нокаутирующий удар',
      icon: 'http://...',
      // <- обратите внимание, описание "засекречено"
    },
  ],
};

export default function getOptions(id, object) {
  const array = object.special;
  let obj = {};
  // выбор объекта по id
  for (const key in array) {
    if (array[key].id === id) {
      obj = array[key];
    }
  }
  // проверка на наличие свойства description
  if (!('description' in obj)) {
    obj.description = 'Описание недоступно';
  }
  //   return Object.entries(obj);
  return (obj);
}
// console.log(getOptions(8, character));
