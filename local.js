const p = document.querySelector("p");
const btn = document.querySelector(".button");

let locals = [];

for (let i = 1; i <= 6; i++) {
  if (localStorage.getItem("d" + i + "r") == `d${i}t`) {
    locals.push(localStorage.getItem(`d${i}r`).replace("t", ""));
  }
}

locals.forEach((l) => {
  p.innerHTML += " " + l;
});

function getFieldError(el) {
  const validity = el.validity;

  if (validity.valid) return true;
  if (validity.valueMissing) return "Wypełnij pole";
  if (validity.typeMismatch) {
    if (el.type === "email") return "Wpisz poprawny email";
  }
  if (validity.patternMismatch) return "Wpisana wartość nie spełnia wymagań";
  return "Wypełnij poprawnie pole";
}

function removeFieldError(field) {
  const errorField = field.nextElementSibling;
  if (errorField !== null) {
    if (errorField.classList.contains("form-error-text")) {
      errorField.remove();
    }
  }
}

function createFieldError(field, text) {
  removeFieldError(field);

  const div = document.createElement("div");
  div.classList.add("form-error-text");
  if (field.type === "checkbox") {
    text = "Wymagane";
    div.innerText = text;
    field.parentElement.appendChild(div);
  } else {
    div.innerText = text;
    field.insertAdjacentElement("afterend", div);
  }
}

const form = document.querySelector("form");
const inputs = document.querySelectorAll("input");
const button = document.querySelector(".button");

form.setAttribute("novalidate", true);

for (const el of inputs) {
  el.addEventListener("click", (e) => {
    removeFieldError(e.target);
  });
}
button.addEventListener("click", (e) => {
  let formHasErrors = false;
  for (const el of inputs) {
    removeFieldError(el);
    el.classList.remove("field-error");

    if (!el.checkValidity()) {
      createFieldError(el, getFieldError(el));
      el.classList.add("field-error");
      formHasErrors = true;
    }
  }
  if (!formHasErrors) {
    for (let i = 1; i <= 6; i++) {
      localStorage.setItem(`d${i}r`, "f");
    }
    locals.forEach((l) => {
      if (localStorage.getItem(l) != null) {
        localStorage.setItem(l, localStorage.getItem(l) + " unavailable");
      }
    });

    button.href = "locals.html";
  }
});
