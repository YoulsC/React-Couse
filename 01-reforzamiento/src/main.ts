import './style.css';
import { getHeroesByOwner } from './bases/08-imp-exp';
import { Owner } from './data/heroes.data';
// import './bases/01-const-let';
// import './bases/02-template-string';
// import './bases/03-object-literal';
// import './bases/04-arrays';
//import './bases/05-functions';
//import './bases/06-obj-destructuring';
//import './bases/07-array-destructuring';
//import './bases/08-imp-exp';
import './bases/09-promises';



document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
   <h1>Hola Mundo lol<h1>
  </div>
`

//En el main.ts usaran la funcion
//console.log( getHeroesByOwner('Marvel'));
console.log(getHeroesByOwner(Owner.DC));


