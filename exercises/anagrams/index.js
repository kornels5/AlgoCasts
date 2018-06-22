// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams (stringA, stringB) {
    return cleanString(stringA) === cleanString(stringB)
}

const cleanString = (str) => {
    return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join()
}


module.exports = anagrams;

// function anagrams(stringA, stringB) {

//     const objA = buildCharMap(stringA)
//     const objB = buildCharMap(stringB)
    
//     if(Object.keys(objA).length !== Object.keys(objB).length) {
//         return false
//     }

//     for (let char in objA) {
//         if (objA[char] !== objB[char]) {
//             return false
//         }
//     }
    
//     return true
// }

// const buildCharMap = (str) => {
//     const charMap = {}
//     for (let char of str.replace(/[^\w]/g, "").toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1
//     }
//     return charMap
// }