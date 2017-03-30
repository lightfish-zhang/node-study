"use strict";
const asyncFunction = ()=>{
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('Async Hello world');
        }, 1000);
    });
};

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