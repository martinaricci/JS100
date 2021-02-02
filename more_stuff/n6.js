let words = [
  'laboratory',
  'experiment',
  'flab',
  'Pans Labyrinth',
  'elaborate',
  'polar bear',
];

const matches = words.filter(value => /lab/.test(value));
console.log(matches); 