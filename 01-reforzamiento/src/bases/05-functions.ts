
function greet(name :string): string{
    return `Hola ${name}`;
   // return 123
}

const greet2 = (name : string): string => {//no cambia lo que hace el this
 return `Hola ${name}`;
} ;



const message = greet ('Naruto');
const message2 = greet2('Sasuke');

console.log(message, message2);

interface User {
    uid: string;
    username: string;
}

function getUser(): User {
    return {
        uid: 'abc-777',
        username: 'El_Papi123',
    };
}


const getUser2 = () => ({
        uid: 'abc-778',
        username: 'juanito'
    });


const user = getUser();
const user2 = getUser2();
console.log(user, user2);

const myNumbers: number[] = [1,2,3,4,5];

// myNumbers.forEach(function(value){ funcion callback que se pasa de argumento una funcion
//     console.log({value})
// });

//syntaxis funcion de flecha
// myNumbers.forEach((value) => {
//     console.log(value)
// });

//pro tip
myNumbers.forEach(console.log);

// //mi sol
// interface Usuario {
//     uid: string,
//     username : string,
// };

// const user2 : Usuario = {
//     uid : 'abc-889',
//     username : 'eljefe123',
// }

//  const getUser2 = (userProp: Usuario):Usuario => return userProp;
// 

// console.log(getUser2(user2));
// //