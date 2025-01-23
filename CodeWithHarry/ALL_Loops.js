// ALL LOOPS IN JAVASCRIPT//

// 1.for-loop//

let a = 1;
console.log("for_loop")
for (let i = 0; i < 5; i++) {
    console.log(a + i);
}

// 2.for-in-loop//

let object = {
    name: "Mastur",
    role: "webdevloper",
}
console.log("for_in");

for (const key in object) {
    const element = object[key];
    console.log(key, element);
}

//3.for-of-loop//
console.log("for_of");

for (const ch of "Mastur") {
    console.log(ch)
}

//4.while-loop//

let i = 0;

console.log("while");
while (i <= 5) {
    console.log(i);
    i++;
}

//5.do-while-loop//

let b = 0;

console.log("do_while");
do {
    console.log(b);
    b++;
} while (b <= 5);


