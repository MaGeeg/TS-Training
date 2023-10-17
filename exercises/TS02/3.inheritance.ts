// your task:
// 1. Declare first class with following details:
// - name: Animal
// - with property type of type string
// - with protected property age of type number with default value 0
// - with constructor:
// --- that needs one parameter to set value of property type
// 2. Declare second class with following details:
// - name: Cat
// - this class inherits after Animal class
// - with constructor:
// --- that needs zero parameters
// --- that sets type to "cat" in super constructor
// - with method:
// --- name: increaseAge()
// --- this method increments value of age by one
// - with method:
// --- name: present()
// --- this should return string In this format: "My type is cat and my age is 2"
// 3. Create object from class Cat
// 4. Invoke method increaseAge() 2 times
// 5. Print return value of method present()

// to test your solution in terminal you can run following command:
// npm run ex2-3

//// TODO:
//// -----------------------HERE PLACE YOUR SOLUTION:-------------------------

class Animal {
    type: string
    age: number

    constructor(type: string) {
       console.log("Set property type:")
       this.type = type
       this.age = 0
    }
}

class Cat extends Animal{
    constructor() {
        super("cat")

    }
    //metoda nie przyjmuje żadnych argumentów i też nic nie zwraca, dlatego ustawiamy typ void
    inceraseAge(): void {
        this.age++
    }

    //metoda nie przyjmuje żadnych argumentów i zwraca wartość typu string
    present(): string {
        return `My type is "${this.type}" and my age is "${this.age}"`

    }
}

// 3. Create object from class Cat

const cat = new Cat()

// 4. Invoke method increaseAge() 2 times

cat.inceraseAge()
cat.inceraseAge()

// 5. Print return value of method present()

console.log(cat.present())



//// -----------------------DONT MODIFY CODE BELOW!-------------------------
// Here you will find expected result of exercise

// Expected output:
// On console 👀 you should see:
// My type is cat and my age is 2
