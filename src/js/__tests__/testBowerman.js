import Bowerman from '../Bowerman.js';

test('Проверяем Bowerman', () => {
  const unit = new Bowerman('Lina', 'Bowerman');
  const result = {
    name: 'Lina', type: 'Bowerman', health: 100, level: 1, attack: 25, defense: 25,
  };
  expect(unit).toEqual(result);
});
