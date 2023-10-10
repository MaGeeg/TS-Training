export function getBiggestNumber(values: number[]) : number {
    let largest = values[0]

    for (let index = 0; index < values.length; index++) {
        if(values[index] > largest) {
            largest = values[index]
        }
    }

    return largest
}

export function getBiggestNumberFast(values: number[]) : number {
    console.log("values:", values)
    
    console.log("values spread:", ...values)
    // Spread syntax (...)
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax

    return Math.max(...values)
}