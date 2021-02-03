"use strict";
//Dom -> Documenty Object Model 자바스크립트에서 html의 자료를 가져와서 제어할 수 있게 한다.

const id = document.querySelector("#id"),
    password = document.querySelector("#password"),
    loginBtn = document.querySelector("button");

loginBtn.addEventListener("click", login);

function login(){
    const req ={
        id: id.value,
        password: password.value,
    };
    console.log(req);
}