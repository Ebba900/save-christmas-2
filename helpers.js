
export function randomArray(len, n) {

    // Skapa en ny tom array av längd len
    const a = new Array(len)

    // Fyll varje plats i arrayen med ett random heltal
    for (let i = 0; i < a.length; i++) {
        a[i] = randomInt(n)
    }

    return a
}

function randomInt(n) {
    return Math.floor(Math.random() * (n + 1))
} 

export function Swap (arr, i, k){
    let x = arr [i] 
    arr[i] = arr [k] 
    arr [k] = x
}
