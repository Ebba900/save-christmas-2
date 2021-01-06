
import {randomArray } from './helpers.js' 

const arr = randomArray (100, 10) 
arr.sort((x, y) => x - y) 
console.log(arr) 

const storage = [
    'Bicycle',
    'Lego',
    'Doll',
    'Teddybear',
    'Crayons',
    'Fishing rod'
] 

storage.sort() 
console.log(storage) 

const kids = [
    { name: 'Elias', age: 11, naughtyScore: 2, wish: 'Bicycle' },
    { name: 'Lotta', age: 9, naughtyScore: 7, wish: 'Hamster' },
    { name: 'Kim', age: 9, naughtyScore: 2, wish: 'Lego' },
    { name: 'José', age: 12, naughtyScore: 9, wish: 'Snowboard' },
    { name: 'Alexandra', age: 12, naughtyScore: 6, wish: 'Survival kit' },
    { name: 'Lisa', age: 10, naughtyScore: 4, wish: 'Lego' } 
] 

