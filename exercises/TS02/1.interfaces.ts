// your task:
// 1. Declare an interface with name UserData and fields:
// - id with type number
// - fullName with type string
// - pass with type string
// - optional field data with type string
// 2. Create two objects of type UserData:
// - fill them with You own data
// 3. Display on console both objects
// 4. Change value of id in both objects:
// - change id from first object with value from second object
// - change id from second object with value from first object
// 4. Display on console both objects

// to test your solution in terminal you can run following command:
// npm run ex2-1

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

interface UserData {
    id: number
    fullName: string
    pass: string
    data?: string
}

const driver1: UserData = {
    id: 11,
    fullName: "John Doe",
    pass: "horse",
    data: "harness"
}

const driver2: UserData = {
    id: 12,
    fullName: "Johny Dolly",
    pass: "horse2"
    
}

console.log(driver1, driver2)

// after change of IDs:

//stworzenie 2 zmiennych które przechowuja id z tych uzytkowników

const id1 = driver1.id
const id2 = driver2.id

driver1.id = id2
driver2.id = id1


console.log(driver1, driver2)

// const driver3: UserData = {
//     id: 12,
//     fullName: "Johny Dolly",
//     pass: "horse2"
    
// }

// const driver4: UserData = {
//     id: 11,
//     fullName: "John Doe",
//     pass: "horse",
//     data: "harness"
// }

// console.log(driver3, driver4)



//// -----------------------DONT MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see (sample output):
// { id: 1, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 2, fullName: 'Bob', pass: '4321' }

// after change of IDs:

// { id: 2, fullName: 'John', pass: '1234', data: 'Some data' }
// { id: 1, fullName: 'Bob', pass: '4321'
