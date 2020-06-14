console.log('even numbers from 0 to 100')
let a = 0;

while (a < 100) {
    console.log(a)
    a+= 2
}

console.log('every 3rd number going backwards from 100 ')
let i = 100;

while (i > 0) {
    console.log(i)
    i-= 3
}

console.log('every other number from 1 to 100')
for (i = 1; i <= 100; i+=2) {
    console.log(i)
}

console.log('Hello(3) World(5) from 0 to 100')
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('Hello World')
    } else if (i % 3 == 0) {
        console.log('Hello')
    } else if (i % 5 == 0) {
        console.log('World')
    } else {
        console.log(i)
    }
}