//normal multiply function
function multiply(a,b,c){
    return a*b*c;
}


//currying function
function curried_multiply(a){
    return function (b) {
        return function (c) {
            return a*b*c
        }
    }
}


let result1 = multiply(2,3,4);
console.log(result1);

//function call
let mul1 = curried_multiply(2);
let mul2 = mul1(3);
let result2 = mul2(4);
console.log(result2);

let result3 = curried_multiply(2)(3)(4);
console.log(result3);