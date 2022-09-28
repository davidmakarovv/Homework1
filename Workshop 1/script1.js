1;

let user = {
  firstname: "giorgi",
  lastname: "smith",
  age: 25,
  studentstatus: "active",
};

console.log(user.studentstatus);

2;

let cities = ["barcelona", "london", "rome", "paris", "prague"];

for (let item of cities) {
  console.log(item);
}

let x = 0;
while (x < cities.length) {
  console.log(cities[x]);
  x++;
}

3;

let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

for (let item of numbers) {
  if (item > 5) {
    console.log(item);
  }
}

4;

let user2 = {
  name: "giorgi",
  age: 20,
  studentstatus: "active",
};
if (user2.age < 18 && user2.studentstatus == "active") {
  console.log("hello");
} else if (user2.name == "levani") {
  console.log("hello levani");
} else if (user2.studentstatus == "active" || user2.age < 25) {
  console.log("hello world");
} else {
  console.log("error");
}

5;

let array = ["watermelon", "pear", 10, 45, 50, "apple", "ananas"];

for (let item of array) {
  if (typeof item == "string") {
    console.log(item);
  }
}

// 6. ?

// let array2 = [
//   [2, -3, 5, 10],
//   [25, -24, -11, 100],
//   [-6, -7, 10],
// ];

// for (i = 0; i < array2.length; i++) {
//   if (i > 0) {
//     console.log(array2[i]);
//   }
// }

7;

let array3 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

for (let item of array3) {
  if (item % 2 == 0) {
    console.log(item);
  }
}

for (let item of array3) {
  if (item % 2 == 1) {
    console.log(item);
  }
}
