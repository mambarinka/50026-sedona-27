var link = document.querySelector("section.hotel-search .button-brown");
var popup = document.querySelector(".modal");
var form = popup.querySelector("form");
var chekin = popup.querySelector("[name=check-in]");
var chekout = popup.querySelector("[name=check-out]");
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
    chekin.focus()
    if (storageAdults && storageChildren) {
        adults.value = storageAdults;
        children.value = storageChildren;
    }
});

/* проверка на заполнение некоторых полей ввода */

form.addEventListener("submit", function (evt) {

    if (!chekin.value || !checkout.value) {
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



