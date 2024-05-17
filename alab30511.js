const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


let totalsum = 0
for (let i= 0; i < numbers.length; i++) { //for loop is iterating through nums
    //add current number to total
    //totalsum = totalsum + numbers[i](current number(1))
    totalsum += numbers[i] // adding to total
    console.log(`i:${i}, currentNumber: ${numbers[i]} total: ${totalsum}`) //show data in terminal
}


// function sumArray(arr) {
//     return arr.reduce((acc, curr) => acc + curr, 0);
// }

// const numbers = [1, 2, 3, 4, 5];
// console.log(sumArray(numbers)); // Output: 15

// return[1, 2, 3, 4, 5,];
// console.log(returnthesum);

// function longestString(arr) {
//     return arr.reduce((longest, current) => longest.length > current.length ? longest : current, '');
// }

// const stringsLongerThan = ['say', 'hello', 'in', 'the', 'morning'];
// console.log(longestString(string)); // Output: "morning"

// function stringsLongerThan(arr, length) {
//     return arr.filter(str => str.length > length);
// }

// sort the array by age
const people = [
    { name: "Alice", age: 35, occupation: "Engineer" },
    { name: "Bob", age: 45, occupation: "Designer" },
    // ... other people
  ];
  
  //remove the age greater than 50
  const sortedByAge = people.sort((a, b) => a.age - b.age);
  
  //change the "occupation ket to "job" ever age by 1
  const filteredPeople = sortedByAge.filter(person => person.age <= 50);
  //
  const updatedPeople = filteredPeople.map(person => ({
    ...person,
    job: person.occupation,
    age: person.age + 1
  }));
  console.log (people, sortedByAge, filteredPeople, updatedPeople)

    

 
 