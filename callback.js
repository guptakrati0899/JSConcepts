function checkin(name,phoneno,callback){

    console.log("Welcome to the ABC Salon");
    callback(name,phoneno)

}

function hairwash(arr,callback){
    console.log("Under Hairwash");
    callback(["Normalwash " ," Keratinwash"])
}

function haircut(arr1,callback){
    console.log("Under Haircut");
    callback(["BobCut ", " LayeredCut ", "MultiStepCut"])
}




const checkingIn = checkin("Krati","8707595662",(val1,val2) =>{
        console.log("Customer Details : " + val1,val2)
        hairwash(val1,(arr)=>{
            console.log("Varieties Of hair wash : " + arr);
            haircut(val1,(arr1)=>{
                console.log("Types Of Haircut: " + arr1)
            });
        });
});