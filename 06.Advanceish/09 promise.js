const uno = ()=>{
    return "iam uno" ;
}
// const dao = ()=>{
//     setTimeout(()=>{
//         return "iam two" ;
//     },3000);
   
// }

const dao = ()=>{
         return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                        resolve("iam two") ;
                    },3000);

         })
       
     }
const thris = ()=>{
    return "iam three" ;
}



const callme=async ()=>{
    let valOne =uno();
    console.log(valOne);

    let valTwo =await dao();
    console.log(valTwo);

    let valtri =thris();
    console.log(valtri);
}

callme();