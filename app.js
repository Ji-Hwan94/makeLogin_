"use strict";

// 모듈
const express = require("express");
const app = express();

//Routing(폴더를 불러오는 방법)
const home = require("./routes/home");

//앱 세팅
app.set("views", "./views");
app.set("view engine", "ejs");

app.use("/", home); //use -> 미들웨어를 등록해주는 method

module.exports = app;