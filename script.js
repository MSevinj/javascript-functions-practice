// Question 1: Simple Function
// Write a function called sayHello that takes a single parameter, name. The function should return a string in this format:
// Output: "Hello, Murad How are you today?”

function sayHello (name){
    console.log ('Hello',name,'How are you today?');
}
sayHello ('Peter')


// Question 2: Function with Default Parameters
// Write a function named discountPrice that takes two parameters:
// price (required)
// discount (optional, defaults to 10)
// The function should return the price after applying the discount.

function discountPrice (price, discount){
    console.log(price-discount);
}
discountPrice (100, 10)



// Question 3: Function Returning Boolean
// Write a function named isEven that takes a single number as a parameter and returns true if the number is even, and false if it is odd.

function isEven (number) {
    if (number %2 ==0){
        console.log(true);
    }
    else{
        console.log(false);
    }
}
isEven(12)


// Question 4: Function with Spread Operator
// Write a function named combineArrays that takes two arrays as parameters and returns a new array that combines both arrays using the array method.

function combineArrays (ary1, ary2) {
    console.log (ary1.concat (ary2));
}
combineArrays ([1,3,5,7], [2,4,6,8])



// Question 5: Function with Destructuring
// Write a function named displayUser that takes an object as a parameter. The object will have properties name, age, and location. The function should return a string like:
// "[name] is [age] years old and lives in [location]."

function displayUser (obj) {
    console.log (obj.name, 'is' ,obj.age, 'years old and lives in' ,obj.location,);
}
const user = {name: "Emily", age: 25, location: "New York"}
displayUser (user)


// Question 6: Function with Multiple Returns**
// Write a function named `getMinMax` that takes an array of numbers as a parameter and returns an object with the smallest and largest numbers in the array.

function getMinMax (ary) {
    let sortedArray = ary.sort ((a,b) => a-b)
    return {min: sortedArray[0], max: sortedArray[3]};
}
console.log (getMinMax ([15,24,2,109]))