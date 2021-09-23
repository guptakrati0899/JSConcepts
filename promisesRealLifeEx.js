const checkindetails = [
    {detail: "Krati"},
    {detail: "8707595662"}
]

const hairwashtypes = [
    {wtype: "Normalwash"},
    {wtype: "Keratinwash"}
]

const haircuttype = [
    {ctype: "BobCut"},
    {ctype: "LayeredCut"}
]

function welcome() {
    console.log("Welcome to the ABC Salon");
    checkindetails.forEach((detail, index) => {
        console.log(detail.detail);
    })
}

function hairwash() {
    console.log("\nUnder Hairwash");
    hairwashtypes.forEach((wtype, index) => {
        console.log(wtype.wtype);
    })
}

function haircut() {
    console.log("\nUnder Haircut");
    haircuttype.forEach((ctype, index) => {
        console.log(ctype.ctype);
    })
}

function userdetails(detail) {
    return new Promise((resolve, reject) => {
        checkindetails.push(detail);
        const error = false;
        if(!error) {
            resolve();
        } else{
            reject("Error")
        }
    });
}

function washtype(wtype) {
    return new Promise((resolve, reject) => {
        hairwashtypes.push(wtype);
        const error = false;
        if(!error) {
            resolve();
        } else{
            reject("Error")
        }
    });
}

function cuttype(ctype) {
    return new Promise((resolve, reject) => {
        haircuttype.push(ctype);
        const error = false;
        if(!error) {
            resolve();
        } else{
            reject("Error")
        }
    });
}


//async-await

async function salon() {
    await cuttype({ctype: "MultiStepCut"});

    welcome();
    hairwash();
    haircut();
}
salon();