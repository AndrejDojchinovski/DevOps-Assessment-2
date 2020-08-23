// importing generateText function into util.test.js file
const { generateText, validateInput, createElement } = require('./util');

 
test('should return false on empty text', () => {
    const text = validateInput('');
    expect(text).toBe(false);
});

test('should output name and age', () => {
    const notEmpty = validateInput('   ', true, false);
    expect(notEmpty).toBe(false);
});

test('should element be validated  ', () => {
    createElement("div","string1","string2");
    const element = document.querySelector('.string2');
    expect(element).toBeDefined();
});

test('should element be validated ', () => {
    createElement("div","name","name2");
    const element = document.querySelector('.name2');
    expect(element).toBeUndefined();
});

test('should output no data  ', () => {
    const text = generateText('', null);
    expect(text).toBe('');
});
