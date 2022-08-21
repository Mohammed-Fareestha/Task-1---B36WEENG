// Task-3
// 1) For the given Json Iterate over all for loops (for, for in, for of, forEach)


//for
const user = ['Mohammed Fareestha', 21, false, 9840];
for (let i = 0; i < user.length; i++) {
    console.log(user[i])
};


//for-of
const person = ['Rukshana', 21, 'YouTuber', 'marred', false];
for (const n of person)
    console.log(n)


//For-in
const car = {
    BMW: 22899,
    Auddi: 98000,
    miniCopper: 788770,
    jackvar: 78781
}
for (let n in car) {
    console.log(`The key is : ${n} and the value is : ${car[n]}`)
}


//forEach
let student = ["MOhammed", "fareestha", 'Rukshana', 'monisha', 'mmiskon']
student.forEach((n) => {
    console.log(n)
})