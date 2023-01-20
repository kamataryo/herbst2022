class animal {
    constructor() {
        this.energy = 100
    }
    eat() {
        this.energy = this.energy + 10
    }
}
class cat extends animal {
    speak() {
        console.log("meow")
    }
}
const cat = new cat()
cat speak()
console.log(cat.energy)
cat.eat()
cat.eat()
cat.eat()
cat.eat()
console.log(cat.energy)
