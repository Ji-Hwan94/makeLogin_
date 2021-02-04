"use strict";

const UserStorage = require("./UserStorage");

class User {
    constructor(body){
        this.body = body;
    }

    login(){
        const body = this.body;
        const { id, password } = UserStorage.getUserInfo(body.id);
        
        if (id) {
            if (id === body.id && password === body.password){
                return { succes: true };
            }
            return { succes: false, msg: "비밀번호가 틀립니다."};
        }
        return { succes: false, msg: "존재하지 않는 아이디입니다."};
    }
}
        

module.exports = User;