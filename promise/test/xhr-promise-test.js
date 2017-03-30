const xhrPromise = require('../src/xhr-promise');

const URL = "http://httpbin.org/get";
xhrPromise.getURL(URL).then(function onFulfilled(value){
    console.log(value);
}).catch(function onRejected(error){
    console.error(error);
});