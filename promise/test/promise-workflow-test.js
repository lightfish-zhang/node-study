"use strict";
const asyncFunction = require("../src/promise-workflow");

//use catch
asyncFunction().then(function (value) {
    console.log(value);
}).catch(function (error) {
    console.log(error);
});

//only use then
asyncFunction().then(function (value) {
    console.log(value);
}, function (error) {
    console.log(error);
});