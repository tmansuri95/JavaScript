console.log( 2 > 1 )
console.log( 2 >= 1 )
console.log( 2 < 1 )
console.log( 2 <= 1 )
console.log( 2 == 1 )
console.log( 2 != 1 )

console.log("02" > 1)

//null comparison
console.log(null == 0); //false because null is only loosely equal to undefined and not to any other value.
console.log(null <= 0); //True, console.log(null <= 0) returns true because null is converted to 0, and 0 <= 0 is true.
console.log(null > 0);
console.log(null >= 0);
console.log(null == undefined);

//undified comparison

console.log(undefined == 0); // false
console.log(undefined <= 0); // false
console.log(undefined >= 0); // false
console.log(undefined > 0);  // false
console.log(undefined < 0);  // false 
console.log("compare",undefined == null); // true


// Strict comparison

console.log("2" === 2); // false