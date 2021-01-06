import {Swap, randomArray } from './helpers.js'

const a = randomArray(100, 10)

console.log(a) 

function BubbleSort (a){
    for(let k = 0; k <a.length; k++){
        for(let i = 0; i < a.length; i++){
            if(a[i] > a [i+1]) {
                Swap (a,i, k + 1)
            }
        }
    } 
    return a
} 
console.log(BubbleSort(a)) 
console.log(BubbleSort([1, 2, 4, 6, 8])) 

