"use strict";
const getURL = (URL)=>{
  return new Promise(function (resolve, reject) {
     let req = new XMLHttpRequest();
     req.open('GET', URL, true);
     req.onload = ()=>{
       if(req.status === 200)
           resolve(req.responseText);
       else
           reject(new Error(req.statusText));
     };
     req.onerror = ()=>{
         reject(new Error(req.statusText));
     };
     req.send();
  });
};
module.exports.getURL = getURL;