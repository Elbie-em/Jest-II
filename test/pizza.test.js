const pizzas = require('../src/data');

test('checks the pizza data is correct', () => {
    expect(pizzas).toMatchSnapshot();
});

test('pizzas should have a length of 4', () => {
    expect(pizzas).toHaveLength(4);
});

