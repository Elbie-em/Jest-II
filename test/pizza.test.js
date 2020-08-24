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

for (let i = 0; i < pizzas.length; i+=1) {
    test(`pizza ${i} should have properties (id, name, image, desc, price)`,() => {
        expect(pizzas[i]).toHaveProperty('id');
        expect(pizzas[i]).toHaveProperty('name');
        expect(pizzas[i]).toHaveProperty('image');
        expect(pizzas[i]).toHaveProperty('desc');
        expect(pizzas[i]).toHaveProperty('price');
        expect(pizzas[i]).not.toHaveProperty('flavor');
    });
}

test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => 'I am a mock function');
    expect(mock('Calling my mock function!')).toBe('I am a mock function');
    expect(mock).toHaveBeenCalledWith('Calling my mock function!');
});