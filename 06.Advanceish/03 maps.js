var myMap=new Map();

myMap.set(1,"hana");
myMap.set(2,"tool");
myMap.set(3,"sith");
myMap.set(4,"nith");

console.log(myMap);

for(let elmt of myMap.values()){
    console.log(elmt);
}

for(let [key,value] of myMap){
    console.log(`key :${key} , value : ${value}`);
}
 myMap.forEach((v,k)=>console.log(`value:${v} and hey is ${k}`));