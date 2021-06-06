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

// arrow funtion

var getuserrole=(name,role)=>{
    switch(role){
        case "student":
            return `${name} is a student`
        case "teacher":
            return `${name} is a teacher`
        default:
            return `${name} is an avenger`
        
    }
}
console.log(getuserrole("chandu","student"))