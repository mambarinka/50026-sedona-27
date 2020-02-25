var link = document.querySelector("section.hotel-search .button-brown");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var checkin = popup.querySelector("[name=check-in]");
var checkout = popup.querySelector("[name=check-out]");
var adults = popup.querySelector("[name=adults]");
var children = popup.querySelector("[name=children]");

var isStorageSupport = true;
var storageAdults = "";
var storageChildren = "";


/* проверка на безопасное соединение в localStorage */

try {
  storageAdults = localStorage.getItem("adults");
} catch (err) {
  isStorageSupport = false;
}

try {
  storageChildren = localStorage.getItem("children");
} catch (err) {
  isStorageSupport = false;
}

/* описание обработчика событий по click */

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.toggle("modal-close");
  popup.classList.add("modal-bounce");
  popup.classList.remove("modal-error");

  if (checkin.value) {
    checkout.focus();
  } else {
    if (checkout.value) {
      checkin.focus();
    } else {
      if (adults.value) {
        children.focus();
      } else {
        if (children.value) {
          adults.focus();
        }
      }
    }
  }
});

/*   if (storageAdults) {
    adults.value = storageAdults;
  }

  if (storageChildren) {
    children.value = storageChildren;
  } */

/* проверка на заполнение некоторых полей ввода */

form.addEventListener("submit", function (evt) {

  if (!checkin.value || !checkout.value || !adults.value || !children.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
    console.log("Нужно ввести дату заезда и дату выезда");
  } else {
    if (isStorageSupport) {
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("children", children.value);
    }
  }
});
