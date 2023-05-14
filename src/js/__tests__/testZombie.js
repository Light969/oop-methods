import Zombie from '../Zombie.js';

test('Проверяем Zombie', () => {
  const unit = new Zombie('Lina', 'Zombie');
  const result = {
    name: 'Lina', type: 'Zombie', health: 100, level: 1, attack: 40, defense: 10,
  };
  expect(unit).toEqual(result);
});
