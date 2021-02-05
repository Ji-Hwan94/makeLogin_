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

    static getUser(...fields) {
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        return fs
        .readFile("./src/databasses/users.json")
        .then((data) => {
            return this.#getUserInfo(data, id);
           }) //성공했을때 작동되는 함수
        .catch(console.error); //error가 생겼을때 작동되는 함수
    }    

    static save(userInfo) {
        //const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { success: true };
    }
}

module.exports = UserStorage;