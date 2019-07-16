// // Create an array that contains the words in the sentence
// let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

// /*
//     The addExcitement function should be an impure function, and accept
//     the array as the sole argument. It should iterate over the array
//     and output the words to the browser console.
// */
// function addExcitement (theWordArray) {

//     // Each time the for loop executes, you're going to add one more word to this string
//     let buildMeUp = ""

//     for (let i = 0; i < theWordArray.length; i++) {
//         buildMeUp = buildMeUp + " " + sentence[i];
//         console.log(buildMeUp)
//         // Concatenate the new word onto buildMeUp
//         // Print buildMeUp to the console
//     }

// }
// // Invoke the function and pass in the array
// addExcitement(sentence)

 


let sentence = ["The","walrus","danced","through","the","trees","in","the","light","of","the","moon"];

let addExcitement = (theWordArray, punctuation, numberPunctuation) => {
    let buildMeUp = ""

    for (let i = 0; i < theWordArray.length; i++) {
        if ((i+1) % 3 === 0){
            buildMeUp += `${theWordArray[i]}${punctuation.repeat(numberPunctuation)} `;
            console.log(buildMeUp);
        } 
        else {
            buildMeUp += `${theWordArray[i]} `;
            console.log(buildMeUp);

            }
        
        
        /*
            If the current word's place (not index) in the array
            is evenly divisible by 3, add an exclamation point
            to the end of the word and then concatenate it to
            `buildMeUp`.

            Otherwise, just concatenate the word itself.
         */


        // Print buildMeUp to the console
    }

}

addExcitement(sentence, "!", 10)