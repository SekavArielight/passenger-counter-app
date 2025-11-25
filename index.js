let count = 0;
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
  console.log(count);
}

function save() {
  saveVariable = count + "-"
  saveEl.innerText += saveVariable;
  console.log(count);
}

// function decrement() {
//     count = count - 1;
//     document.getElementById("count-el").innerText = count;
// }

console.log(increment());
