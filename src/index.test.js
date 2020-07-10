import getOptions, { character } from './index.js';

test('have description', () => {
  const received = getOptions(8, character);
  expect(received.description).not.toBe('');
});

test('descripton is unavailable', () => {
  const received = getOptions(9, character);
  expect(received.description).toBe('Описание недоступно');
});
