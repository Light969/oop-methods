import Undead from '../Undead.js';

test('Проверяем Undead', () => {
  const unit = new Undead('Lina', 'Undead');
  const result = {
    name: 'Lina', type: 'Undead', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(unit).toEqual(result);
});
