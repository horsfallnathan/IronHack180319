describe('add() method', function() {
    it('should be a function', function() {
        expect(typeof add).toEqual('function');
    });
    it('should add up two numbers', function() {
        expect(add(2, 3)).toEqual(5);
    });
    it('should ignore additional arguments (more than two)', function() {
        expect(add(1, 2, 3)).toEqual(add(1, 2));
    });
    it('should return a number', function() {
        expect(typeof add(2, 3)).toEqual('number');
    });
});

describe('toSnowflakeCase() method', function() {
    it('should be a function', function() {
        expect(typeof toSnowflakeCase).toEqual('function');
    });
    it('should return a string', function() {
        const result = toSnowflakeCase('str');
        expect(typeof result).toEqual('string');
    });
    // method is optional
    it('should same length as input', function() {
        const input = 'anytext';
        const result = toSnowflakeCase(input);
        expect(result.length).toEqual(input.length);
    });
    it('should capitalize every character with an odd index', function() {
        const output = toSnowflakeCase('ironhack');

        const oddLowerCase = output
            .split('')
            .find((char, i) => i % 2 === 1 && char === char.toLowerCase());
        expect(oddLowerCase).toBeFalsy();
    });
});
