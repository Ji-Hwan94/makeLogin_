"use strict";

const fs = require("fs").promises;

class UserStorage {
    
    static #getUserInfo(data, id) {
        const users = JSON.parse(data);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
         }, {}); 
            
            return userInfo;   
    }

    static #getUsers(data, isAll, fields){
        const users = JSON.parse(data);
        if(isAll) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUser(isAll, ...fields) {
        return fs
        .readFile("./src/databasses/users.json")
        .then((data) => {
            return this.#getUsers(data, isAll, fields);
           }) //성공했을때 작동되는 함수
        .catch(console.error); //error가 생겼을때 작동되는 함수    
    }

    static getUserInfo(id){
        return fs
        .readFile("./src/databasses/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
           }) //성공했을때 작동되는 함수
        .catch(console.error); //error가 생겼을때 작동되는 함수
    }    

    static async save(userInfo) {
       const users = await this.getUser(true);
       if(users.id.includes(userInfo.id)){
           throw "이미 존재하는 아이디입니다.";
    } 
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        fs.writeFile("./src/databasses/users.json", JSON.stringify(users));
        return { success: true }
    } //데이터 추가
}

module.exports = UserStorage;