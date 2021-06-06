function sum(a,b){
    return a+b;
};


const arry=[1,2];

//console.log(sum(...arry));//spread operator ,takes grp and spread in individual


function sumTwo(...args){
    console.log(args);
    let sum=0;
    for(const arg of args){
        sum+=arg;
    }
    return sum;
}
console.log(sumTwo(1,2,3,4));//rest opertor oposite of spread