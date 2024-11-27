



// Write a for loop to print the numbers from 1 to 20.



for (var a =1 ; a<=20 ; a++){
    console.log(a)
}
console.log("-----------------------------------------------------------")





// Create a for loop to print the squares of numbers from 1 to 10.




for(var i = 1; i <= 10; i++) {

    console.log(i*i)
}
console.log("-----------------------------------------------------------")




// Use a for loop to print the first 10 multiples of 5.



for(var a = 1; a<=10; a++){
    

    if(a<=5)
    {
   var  b=`5 * ${a}=${5 * a}` ;
    console.log(b);
    }

    
}




console.log("-----------------------------------------------------------")



// Write a for loop to print numbers from 20 to 1 in reverse order.

for (var a =20; a>=1; a--){
    console.log(a)
}




console.log("-----------------------------------------------------------")





// 5.Create a for loop to print the first 10 even numbers in reverse order (e.g., 20, 18, 16, …).




for (var a =20; a>=1; a--){

     if(a%2==0){
        console.log(a)
     }


}



// 6.Print each element of the array
// Input: [10, 20, 30, 40, 50]

// Expected Output:
//  10  
// 20  
// 30  
// 40  
// 50  

console.log("-----------------------------------------------------------")




var arr= [10,20,30,40,50];
// arr.push(10 ,20 ,30,40,50);
console.log(arr[0],arr[1],arr[2],arr[3],arr[4]);
for(var i = 0; i<=4 ; i++){
    console.log(arr[i])
}


console.log("-----------------------------------------------------------")





// 7.Print the index of each element along with its value
// Input: ['apple', 'banana', 'cherry']

// Expected Output:
// Index 0: apple  
// Index 1: banana  
// Index 2: cherry 

const fruits = [];
fruits.push("banana", "apple", "cherry");
fruits[4]='peach';
console.log(fruits[3]); //undefined
console.log(fruits );
for (var a = 0 ; a< fruits.length; a++){
    console.log(`Index${a}:${fruits[a]}`)

}


