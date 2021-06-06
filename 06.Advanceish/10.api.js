fetch('https://api.chucknorris.io/jokes/random')
.then(response=>{
    //console.log("Api",response.json());
    return  response.json();
})
.then(data=>{
    var joke=data.value;
    console.log("joke",joke);
})
.catch()



