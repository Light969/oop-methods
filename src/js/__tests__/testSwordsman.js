import Swordsman from '../Swordsman.js';

test('Проверяем Swordsman', () => {
  const unit = new Swordsman('Lina', 'Swordsman');
  const result = {
    name: 'Lina', type: 'Swordsman', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(unit).toEqual(result);
});
