function sayhello(name){
    console.log("hello world");
   // console.log("hello world",name);
   console.log(`hello world ,${name}`);

}
sayhello("ppp");

function returning(name){
    return name;
}
var x=returning(3);
console.log(x);