const pizzas = require('../src/data');

test('checks the pizza data is correct', () => {
    expect(pizzas).toMatchSnapshot();
});

test('pizzas should have a length of 4', () => {
    expect(pizzas).toHaveLength(4);
});

test('checks for pizza names available on menu', () => {
    expect(pizzas.map(pizza => pizza.name)).toEqual([
        'Chicago Pizza',
        'Neapolitan Pizza',
        'New York Pizza',
        'Sicilian Pizza'
    ])
});