const input = document.getElementById("user-input");
const btnCheck = document.getElementById("check-btn");
const btnCLear = document.getElementById("clear-btn");
const results = document.getElementById("results-div");

const Check = (e) => {
  const inputValue = input.value.trim();
  e.preventDefault();
  inputValidator(inputValue);
};

const Clear = (e) => {
  e.preventDefault();
  results.innerHTML = "";
};

const inputValidator = (inputValue) => {
  if (inputValue === "") {
    alert("Please provide a phone number");
  } else {
    numberValidator(inputValue);
    input.value = "";
  }
};

const numberValidator = (number) => {
  const numRegex =
    /^([1]{1})?[\s]?((\(([0-9]{3})\))|([0-9]{3}))[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  const p = document.createElement("p");
  console.log(number);
  console.log(number.length);

  if (numRegex.test(number) && number.length <= 16 && number.length >= 10) {
    p.innerText = `Valid US number: ${number}`;
    results.appendChild(p);
  } else {
    p.innerText = `Invalid US number: ${number}`;
    results.appendChild(p);
  }
};

btnCheck.addEventListener("click", Check);
btnCLear.addEventListener("click", Clear);
