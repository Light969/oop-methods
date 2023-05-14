import Daemon from '../Daemon.js';

test('Проверяем Daemon', () => {
  const unit = new Daemon('Lina', 'Daemon');
  const result = {
    name: 'Lina', type: 'Daemon', health: 100, level: 1, attack: 10, defense: 40,
  };
  expect(unit).toEqual(result);
});
