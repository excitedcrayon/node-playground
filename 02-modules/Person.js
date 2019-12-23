// this is a custom module
// object takes a name, gender and age

exports.Person = (name, gender, age) => {
    return `Hello ${name}.<br> Thank you for entering your information.<br> You identify as a ${gender} and your age is: ${age}.`;
};