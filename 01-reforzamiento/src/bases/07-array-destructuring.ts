
const characterNames = ['Naruto', 'Sasuke', 'Sakura'];


const [,,p3] = characterNames;

console.log ({ p3 });


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

//console.log(letters, numbers);

//Tarea class22
// const useState = (n1:string) => {
    
// const setName = (newName:String) => {
//     console.log(newName);
//     } 

//     return [n1,setName ] as const;

// }

//sol del profe
const useState = (n1:string) => {
    return [
        n1,
        (newName:string) => {
        console.log(newName);
    }, 
 ] as const;
};

const [name, setName] = useState('Goku');
console.log(name);
setName('Vegeta');
//