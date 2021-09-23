     //Sync
     function syncdemo(){
         console.log("Here is the demo for sync function");
     }

     function syncdemo1(){
         console.log("Hi! My name is Krati");
     }
     function sumdemo(a,b){
         console.log(a+b);

     }

     syncdemo1();
     sumdemo(5,6);
     syncdemo();


     //async

     function asyncdemo(){
         setTimeout(() =>{
             console.log("Here is the demo of async function")},5000)
         }

    function asyncdemo1(){
        setInterval(() => {
        console.log("Hello ! I am Krati")},2000)
    }     

    asyncdemo();
    asyncdemo1();
     
    
