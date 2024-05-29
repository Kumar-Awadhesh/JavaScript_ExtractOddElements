//fuction to extract odd element from the array.
function extractOdd(array){
    let Odd=[];
    //iteration over array to extract odd elements with built in function forEach.
    let arr=array.forEach(el =>{
        if (el%2!=0){
            //pushing the odd elements to new array.
            Odd.push(el);
        }
    })
    //return the array with odd elements.
    return(Odd)
}
//input taking of array.
const array=[1, 2, 3, 4, 5]

//calling the function to print the array of odd elements.
let odd=extractOdd(array)
console.log(odd)
