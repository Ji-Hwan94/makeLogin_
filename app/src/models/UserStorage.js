"use strict";

class UserStorage {
    static #users = {
        id: ['jihwan', 'kyubong', 'ghkdrbqhd'],
        password: ['1234', '1234', 'qhd85246'],
        name: []
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
}

module.exports = UserStorage;