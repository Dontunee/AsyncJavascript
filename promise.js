const promise = new Promise((resolve,reject) => {
    //Kick off some async work
    //
    setTimeout(() =>{
        
    //resolve(1);
    reject(new Error('message'));
    },2000);
});

promise
    .then(result => console.log('result', result))//if successful
    .catch(err => console.log('Error', err.message));//if error occurs check for the object returned