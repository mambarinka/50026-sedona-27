var link = document.querySelector("section.hotel-search .button-brown");

var popup = document.querySelector(".modal");
var open = popup.querySelector("section.hotel-search .button-brown");

var form = popup.querySelector("form");
var chekin = popup.querySelector("[name=check-in]");
var chekout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storage = "";

try {
  storage = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storage = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

link.addEventListener("click", function (evt) {
  popup.classList.add("modal-close");
  evt.preventDefault();
  if (storage) {
    adults.value = storage;
  }

  if (storage) {
    children.value = storage;
  }
});


open.addEventListener("click", function (evt) {
  popup.classList.remove("modal-close");
});


form.addEventListener("submit", function (evt) {
  if (!chekin.value || !checkout.value || !adults.value || !children.value) {
    evt.preventDefault();
    console.log("Нужно ввести дату заезда, дату выезда, заполнить количество взрослых и детей");
  }

  if (isStorageSupport) {
    localStorage.setItem("adults", adults.value);
    localStorage.setItem("children", children.value);
  }
});
