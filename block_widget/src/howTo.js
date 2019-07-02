const arr1 = [[1, 2, 3, 4], [[2, 3, 4, 5, 8, 11, 22], [1,2,3,4,5], [1,2,3,4,5,6]], [6, 7, 8, 8, 15, 77, 12], [11, 21, 11]]

const arr = [1,2,3,4,5,6]

const re = (n, arr) => {

    if (Array.isArray(arr[n])) {
        re(arr[n].length - 1, arr[n])
    } else {
        console.log(arr[n])
    }

    if (n > 0) {
        re(n - 1, arr)
    }

}

// const ss = [1, 2, 3, 4]
// const sk = [3, 4, 5, 6, 7, 8]

// const combiner = (arr1, arr2) => arr1.map(e => arr2.map(k => `${e}${k}`))

// console.log(arr1.reduce((a, b) => {
//     console.log(a, b)
//     return a
// }, arr1[0]))

// re(arr1.length - 1, arr1)
// [['n1', 'n2', 'n3'], ['h1', 'h2', 'h3', 'h4', 'h5']]
// const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f', 'h'], ['g', 'i', 'j', 'k', 'l']]

// const comb = (arr) => {
//     let item1 = arr[0]
//     console.log(item1)
//     arr.map(e => {
//         if (Array.isArray(e)) {
//             comb(e)
//         } else {
            // each element of the nested arrays
//             console.log(e)
//         }
//     })
// }

const arr2 = [['a', 'b', 'c'], ['d', 'e', 'f', 'h'], ['g', 'i', 'j', 'k', 'l']]

const comb = (arr) => {
    let counter = 1
    const combiner = (arr1, arr2) => arr1.map(e => arr2.map(k => `${e}${k}`))
    // holy fuck
    for (let i = 0; i < arr.length - 1; i++) {
        
    }
}

const ttt = ['a', 'b', 'c', 'd', 'e', 'f']

const komb = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        for (let y = i + 1; y < arr.length; y++) {
            if (Array.isArray(arr[i] && Array.isArray(arr[y]))){
                komb(arr)
                console.log(arr[i] + arr[y])
            }
        }
    }
}


// comb(arr2)
komb(ttt)