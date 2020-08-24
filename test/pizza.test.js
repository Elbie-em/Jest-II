const pizzas = require('../src/data');

test('checks the pizza data is correct', () => {
    expect(pizzas).toMatchSnapshot();
});
