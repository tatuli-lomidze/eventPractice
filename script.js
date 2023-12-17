// ● შექმენი button, რომელზე დაწკაპების
// შემდეგაც გაიხსნება მოდალი და მოდალის
// უკან შავი/გამჭვირვალე background

const button = document.querySelector("#btn");
const modal = document.querySelector("#modal");
const overlay = document.querySelector("#overlay");

button.addEventListener("click", () => {
  modal.style.display = "block";
  overlay.style.display = "block";
});

// // 2
const form = document.querySelector(".setColor");
const input = document.querySelector('input[name="input-color"]');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (input.value === "red") {
    document.body.style.background = "red";
    input.value = "";
    return;
  }

  if (input.value === "green") {
    document.body.style.background = "green";
    input.value = "";
    return;
  }

  if (input.value === "blue") {
    document.body.style.background = "blue";
    input.value = "";
    return;
  }
  if (input.value === "black") {
    document.body.style.background = "black";
    input.value = "";
    return;
  }
  if (input.value === "white") {
    document.body.style.background = "white";
    input.value = "";
    return;
  }
  if (input.value === "") {
    alert("please provide the  color");
  } else {
    alert("please provide the correct color");
    input.value = "";
    return;
  }
});

// or easier version

// const form = document.querySelector(".setColor");
// const input = document.querySelector('input[name="input-color"]');

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     if (input.value === "") {
//         alert("Please provide a color");
//         return;
//     }

//     switch (input.value) {
//         case "red":
//             document.body.style.background = "red";
//             break;
//         case "green":
//             document.body.style.background = "green";
//             break;
//         case "blue":
//             document.body.style.background = "blue";
//             break;
//         case "black":
//             document.body.style.background = "black";
//             break;
//         case "white":
//             document.body.style.background = "white";
//             break;
//         default:
//             alert("Please provide a valid color");

//     }

//     input.value = "";
// });

// 3)

const formAverage = document.querySelector(".getAverage");
const inputAverage = document.querySelector('input[name="input-numbers"]');
const resultDisplay = document.querySelector("#result");

formAverage.addEventListener("submit", (event) => {
  event.preventDefault();
  const userInput = inputAverage.value;
  const array = userInput.split(":").map((item) => Number(item));

  if (array.length > 0) {
    sum = 0;
    for (let i of array) {
      sum += i;
    }

    const result = sum / array.length;

    resultDisplay.textContent = result;
  }
});
