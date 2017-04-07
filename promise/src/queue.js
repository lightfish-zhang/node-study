let a = Promise.resolve(1).then((a)=>{
   console.log('step 1');
   console.log(a);
   return Promise.resolve(a).then((a)=>{
       a = a * 2;
       console.log('step 2');
       console.log(a);
       return a
   })
}).then((a)=>{
    a = a * 2;
    console.log('step 3');
    console.log(a);
});