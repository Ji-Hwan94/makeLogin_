"use strict";

class UserStorage {
    static #users = {
        id: ['jihwan', 'kyubong', 'ghkdrbqhd'],
        password: ['1234', '1234', 'qhd85246'],
        name: ['지환', '황규봉', '황지환']
    };

    static getUser(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, fields) => {
            if (users.hasOwnProperty(fields)) {
                newUsers[fields] = users[fields];
            }
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUserInfo(id){
        const users = this.#users;
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users); // => [id, password, name]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser;
        }, {});

        return userInfo;
    }
    
    static save(userInfo) {
        const users = this.#users;
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.password.push(userInfo.password);
        return { succes: true };
    }
}

module.exports = UserStorage;