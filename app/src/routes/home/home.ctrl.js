"use strict"

const users = {
    id: ['jihwan', 'kyubong', 'ghkdrbqhd'],
    password: ['1234', '1234', 'qhd85246'],
};

const output = {
    hello:(req, res) => {
        res.render("home/index");
    },
    login:(req, res) => { 
        res.render("home/login");
    },
};

const process = {
    login: (req, res) => {
       const id = req.body.id,
       password = req.body.password;

       if (users.id.includes(id)){
           const idx = users.id.indexOf(id);
           if (users.password[idx] === password){
               return res.json({
                   success: true,
               });
           }
       }

       return res.json({
           success: false,
           msg: "로그인에 실패되었습니다.",
       })
    },
}


module.exports = {
   output,
   process,
};