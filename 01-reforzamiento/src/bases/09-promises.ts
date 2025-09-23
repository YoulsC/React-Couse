

const myPromise = new Promise ((resolve, reject)=> {

    setTimeout(() => {
       //yo quiero mi dinero// 
      //resolve(100);
      reject('No me dan el dinero');
    }, 2000); // 2 segundos

});

myPromise.then(
    (myMoney) => {
        console.log(`Tengo mi dinero ${myMoney}`);
    }
).catch(reason => {
    console.warn(reason);
})
.finally(() => {
    console.log('Ni moido');
})