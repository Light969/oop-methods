import Magician from '../Magician.js';

test('Проверяем Magician', () => {
  const unit = new Magician('Lina', 'Magician');
  const result = {
    name: 'Lina', type: 'Magician', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(unit).toEqual(result);
});
