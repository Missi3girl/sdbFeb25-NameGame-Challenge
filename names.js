/* 
    ? Challenge Take Home
    * create a placeholder variable
    * create a string of names of everyone in the session
    * loop over the string of names
    * pass every character into the placeholder variable APART from any vowels
    * console log the placeholder variable
*/

/*
let sdbFeb25 = ["Ronnie", "Jaise", "India", "Wizzard", "Joseph", "Nikiva", "Missy", "Robert", "Samantha", "Gabe"]

for (i of sdbFeb25) {
    console.log(i);
}

for (let i = 0; i < sdbFeb25.length; i++) {
    console.log(i);
}
*/

// I tried to do this based on my understanding and it didn't work, nor make sense. I asked google and chatgpt, and I just don't get it... I need to know why these things are done in order to aptly be able to execute this in any situation with the correct commands for that situation....


let placeholder = "";

let sdbFeb25 = "Ronnie Jaise India Wizzard Joseph Nikiva Missy Robert Samantha Gabe";

for (i of sdbFeb25) {
     if (i !== "a" && i !== "e" && i !== "i" && i !== "I" && i !== "o" && i !== "u") {
         placeholder = placeholder + i;
     }
    //if (!(i === "a" || i === "e" || i === "o")) {
    //    placeholder = placeholder + i;
    //}
}
console.log(placeholder);

// I took Paul's code and used it in my variable names. I STILL DO NOT UNDERSTAND HOW TO CHOOSE WHAT FUNCTION TO USE AND WHEN!
// Also i !== "" - insert lowercase vowel, only took out the lowercase vowels. Another i !== "" had to be used for the uppercase vowel in India's name.