let sum = 0
let sum2 = 0

for (let number = 2; number <= 10000; number = number + 1) {

    let isPrime = true
    for (let yakusu = 2; yakusu < number; yakusu++) {
        if (number % yakusu === 0) {
            isPrime = false
            console.log(number, 'は', yakusu, 'で割り切れるので素数でない')
            break
        }
    }
}

if(isPrime) {
    console.log(number, 'は素数')
    if(number % 3 === 1) {
        sum = sum1 + number
    }
    if(number % 3 === 2) {
        sum2 = sum2 + number

    }
}
console.log("2から10000までの素数のうち、3で割ると1余るものの和", sum1)
console,log("2から10000までの素数のうち、3で割ると2余るものの和", sum2) 