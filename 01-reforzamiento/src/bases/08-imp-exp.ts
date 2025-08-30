import { heroes, type Hero, Owner } from "../data/heroes.data"


const getHeroById = (id:number):Hero | undefined => {
 
const hero = heroes.find( (hero) => {
    return hero.id === id;
});

// if (!hero){
//     throw new Error (`No existe un heroe con el id : ${id}`);
// }

 return hero;
};

//console.log(getHeroById(1));

export const getHeroesByOwner = (owner:Owner):Hero[] | undefined => {
    const heroesByOwner:(Hero[]| undefined) = heroes.filter((hero)=>{
        return hero.owner===owner;
    });
    
    return heroesByOwner;
}

// getHeroesByOwner => Hero []
// Filtra heroes por su propietario
// @param Owner - el propietario por el cual filtar (dc o Marvel), usar la enum Owner
// @returns Array de heroes pertenecientes al propietario

// console.log(getHeroesByOwner('Marvel') );