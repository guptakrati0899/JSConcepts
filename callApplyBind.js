let  guest1 = {
    firstname : "Krati",
    lastname: "Gupta",
    email : "kratigupta8545@gmail.com",
    }


let guest2 ={
    firstname : "Nishu",
    lastname: "Tyagi",
    email : "nishuty@gmail.com"

}


let guest3 ={
    firstname : "Vanshika",
    lastname: "Rastogi",
    email : "vanshu@gmail.com"

}

let checkin_out = function(roomNumber,checkin,checkout){
    console.log("Check IN/OUT Details: ")
    console.log(this.firstname + " "+ this.lastname + " email:" + this.email  + " stayed in room number "+ roomNumber +" from " + checkin + " to "+ checkout);
};

//call
checkin_out.call(guest1,"301","2 Aug 2021","5 Aug 2021");  

// Passes arguments individually


//apply

checkin_out.apply(guest2,["206", "20 september 2021", "28 September 2021"]);

// same as call() but passes argument as an array


//bind

let guestin_out = checkin_out.bind(guest3); //creates new object and binds guest3

guestin_out("402","1 Oct 2021", " 5 Oct 2021");