"use strict";
const asyncFunction = ()=>{
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 1000);
    });
};
module.exports = asyncFunction;