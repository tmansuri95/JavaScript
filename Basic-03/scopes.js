// var c = 300
let a = 300 // global variable (scope)
if (true) {
    let a = 10   // block scope
    const b = 20                        // let const scope is only in curly brackets
    // var c = 30
    // console.log("INNER: ", a);
    
}



// console.log(a);
// console.log(b);
// console.log(c);


// ************** 31-07-2024 ******************

function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "Aalu"
    if (username === "Aalu") {
        const website = " youtube"
        console.log(username + website);  // run
    }
    // console.log(website); // error
}

// console.log(username); // error


// ++++++++++++++++++ interesting ++++++++++++++++++


//  console.log(addone(5))

 function addone(num){
     return num + 1
 }



//  addTwo(5)
 const addTwo = function(num){ // expression
   return num + 2
 }

//  console.log(addTwo(5))