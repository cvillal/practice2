// alert('we are doing this!')

////Datat types
// const name = 'Carolina';
// const age = 33;
// const rating = 5.0;
// const isCool = true;
// const x = null;
// const y = undefined;

// console.log(typeof x)

///Strings

// Concatenation
// console.log('My name is ' + name + ' and I am ' + age + 'years old');
// Template Literals
// console.log(`My name is ${name} and I am ${age}years old`);

// const s = "Hello World!";

// console.log(s.length)
// console.log(s.toUpperCase())
// console.log(s.toLowerCase())
// console.log(s.substring(0,5).toUpperCase());

// const s = 'tech, comps, it, code';
// console.log(s.split(', '))
// .split() splits the string into an array becomes valuable because then you can add to the array 

//Arrays- variables that hold multiple values

// const numbers = new Array(1,2,3,4,5);
// console.log(numbers);

// when you see a new SOMETHING its called a constructor and creates a new thing. but not very likely to see that

// const fruits = ['apples', 'oranges', 'pears'];
// console.log(fruits[2])
// fruits[3] = 'mangos';
// fruits.push('grapes');
// fruits.unshift('strawberries');
// fruits.pop('oranges');
// console.log(fruits)
// console.log(Array.isArray(fruits));
// console.log(fruits.indexOf('apples'));

// Object Literals = key value pairs
const person = {
    firstName: 'Carolina',
    lasName: 'Doe',
    age: 33,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '57 kenmare st',
        city:'New York',
        state: 'NY'
    }
}

// console.log(person.hobbies[0])
console.log(person.address.city)