// Making a Prototype
String.prototype.toSnowflakeCase = function() {
    return this.split('')
        .map((c, i) => (i % 2 === 0 ? c.toLowerCase() : c.toUpperCase()))
        .join('');
};

const myStr = 'ironhack';

console.log(myStr.toSnowflakeCase());
