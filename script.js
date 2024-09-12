const countValue = document.querySelector('#counter');

function increment() {
    let value = parseInt(countValue.innerText); //get value from ui
    value = value + 1;  // update the value
    countValue.innerText = (value); //reassign the value to ui
};

function decrement() {
    let value = parseInt(countValue.innerText); //get value from ui
    value = value - 1;  // update the value
    countValue.innerText = (value); //reassign the value to ui
};