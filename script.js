//1
const number = [4, 10, 20];
console.log(number);
number[1] = 50;
console.log(number);

//2
const string = ['Lemon', 'Apple', 'Orange'];
console.log(string);
string[3] = "Peach";
console.log(string);

//3
const arr = [1, 20, 5, 3, 10];
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; 
}
console.log(sum);

//4
const numbers = [1, 2, 3, 4, 5];
for (const output of numbers) {
    console.log(output);
}

//5
const word = ["Kivi", "Watermelon", "Melon", "Egg", "Cucumber"];
for (let i = 0; i < word.length; i++) {
    if (word[i].length >= 5) {
        console.log(word[i]);
    }
}

//6
const array = [1, 4, 10, 60, 50, 100, 47, 90, 120, 6];
const max = Math.max(...array);
console.log(max);

//7
const paired = [
    [2, 14, 5],
    [4, 9, 7],
    [30, 18, 6],
];
for (let i = 0; i < paired.length; i++) {
    for (let j = 0; j < paired[i].length; j++) {
        if (paired[i][j] % 2 === 0) {
            console.log(paired[i][j]);
        }
    }
}