"use strict"

var changeUser = document.querySelector("#change_user");
var myHeading = document.querySelector("h1");

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    myHeading.textContent = localStorage.getItem("name");
}
changeUser.onclick = function() {
    setUserName();
}

function setUserName() {
    var userName = prompt("Enter your name:");
    localStorage.setItem("name", userName);
    myHeading.textContent = userName;
}