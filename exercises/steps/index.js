// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, line = '') {
    if (n === row) { 
        return
    }

    if(line.length === n) {
        console.log(line)
        return steps(n, row + 1)
    }

    if (line.length <= row) {
        line += '#'
    } else {
        line += ' '
    }

    steps(n, row, line)
}

module.exports = steps;

// function steps(n) {
//     let line = ''
//     for (let i=0; i<n; i++) {
//         line = ''        
//         for (let j=0; j<=i; j++) {
//             line += '#'
//         }
//         for (let k=n-1; k>i; k--) {
//             line += ' '
//         }
//         console.log(line)
//     }
// }

// function steps(n) {
//     for (let row=0; row<n; row++) {
//         let line = ''
//         for (let column=0; column<n; column++) {
//             if(column <= row) {
//                 line += '#'
//             } else {
//                 line += ' '
//             }
//         }
//         console.log(line)
//     }
// }