var link=document.querySelector("section.hotel-search .button-brown"),popup=document.querySelector(".modal"),form=popup.querySelector("form"),checkin=popup.querySelector("[name=check-in]"),checkout=popup.querySelector("[name=check-out]"),adults=popup.querySelector("[name=adults]"),children=popup.querySelector("[name=children]"),isStorageSupport=!0,storageAdults="",storageChildren="";try{storageAdults=localStorage.getItem("adults")}catch(e){isStorageSupport=!1}try{storageChildren=localStorage.getItem("children")}catch(e){isStorageSupport=!1}popup.classList.add("modal-close"),link.addEventListener("click",function(e){e.preventDefault(),popup.classList.toggle("modal-close"),popup.classList.add("modal-bounce"),popup.classList.remove("modal-error"),storageAdults&&(adults.value=storageAdults),storageChildren&&(children.value=storageChildren),checkin.value?checkout.value?adults.value?children.focus():adults.focus():checkout.focus():checkin.focus()}),form.addEventListener("submit",function(e){checkin.value&&checkout.value&&adults.value&&children.value?isStorageSupport&&(localStorage.setItem("adults",adults.value),localStorage.setItem("children",children.value)):(e.preventDefault(),popup.classList.remove("modal-error"),popup.offsetWidth=popup.offsetWidth,popup.classList.add("modal-error"),console.log("Нужно ввести дату заезда и дату выезда"))});