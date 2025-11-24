let count = 0;
let countEl = document.getElementById("count-el")

function increment() {
  count = count + 1;
  countEl.innerText = count;
  return console.log(count);
}

function save(){
    console.log(count)
}

// function decrement() {
//     count = count - 1;
//     document.getElementById("count-el").innerText = count;
// }

console.log(increment());
