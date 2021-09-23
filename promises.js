const promise1 = new Promise((resolve)=>{
    console.log("Begin Promise 1");
    resolve('A is resolved');
    console.log("End Promise 1");
} );


const promise2 = new Promise((resolve)=>{
    console.log("Begin Promise 2");
    resolve('B is resolved');
    console.log("End Promise 2");
} );


//using promise approach

const getPromise = () =>{
    console.log("getPromise()");

    return promise1.then ((resultA) =>{
        console.log("promise call 1");

        return promise2.then ((resultB) =>{
            console.log("promise call 2");
            console.log("promises resolved : " , resultA,resultB);
        });
    });
};

const promiseCall = getPromise();


//using await-async

const getPromiseAsync = async () =>{
    console.log("getPromiseAsync()");

    const resultA = await promise1;
        console.log("Promise Async : A");

        const resultB = await promise2;
            console.log("Promise Async : B");
            console.log("Async Promises Resolved :" , resultA , resultB);
};

const promiseasyncCall = getPromiseAsync();




