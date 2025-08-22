
const characterNames = ['Naruto', 'Sasuke', 'Sakura'];


const [,,p3] = characterNames;

console.log ({ p3 });


const returnsArrayFn = () => {
    return ['ABC', 123] as const;
}

const [letters, numbers] = returnsArrayFn();

console.log(letters, numbers);

const useState = () => {
    
const setName = (newName:String) => {
    console.log(newName);
    } 

    return ['Goku',setName ] as const;

}