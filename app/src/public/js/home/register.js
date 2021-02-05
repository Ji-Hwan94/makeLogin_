"use strict";
//Dom -> Documenty Object Model 자바스크립트에서 html의 자료를 가져와서 제어할 수 있게 한다.

const id = document.querySelector("#id"),
    name = document.querySelector("#name"),
    password = document.querySelector("#password"),
    conformpass_word = document.querySelector("#conformpass_word"),
    registerBtn = document.querySelector("#button");
    
    registerBtn.addEventListener("click", register);
    
function register(){
    if (!id.value) return alert("아이디를 입력해주세요.")
    if(password.value !== conformpass_word.value){
        return alert("비밀번호가 일치하지 않습니다.");
    }
    const req ={
        id: id.value,
        name: name.value,
        password: password.value,
        conformpass_word: conformpass_word.value
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



