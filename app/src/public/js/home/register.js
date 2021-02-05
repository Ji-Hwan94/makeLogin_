"use strict";
//Dom -> Documenty Object Model 자바스크립트에서 html의 자료를 가져와서 제어할 수 있게 한다.

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    conformpass_word = document.querySelector("#conformpass_word"),
    registerBtn = document.querySelector("#button");
    
    registerBtn.addEventListener("click", register);
    
function register(){
    const req ={
        id: id.value,
        name: name.value,
        password: password.value,
        conformpass_word: conformpass_word.value,
    };

    fetch("/register", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json",
        },
        body: JSON.stringify(req),
    })
    .then((res) => res.json())
    .then((res) => {
        if (res.success){
            location.href = "/login"
        } else {
            alert(res.msg);
        }
    })
    .catch((err) => {
        console.error("회원가입 중 에러 발생");
    });
}



