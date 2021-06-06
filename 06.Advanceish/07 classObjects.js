const User=require("./06 class.js");


const chandu=new User("chandana","reddy@gmail.com")


console.log(chandu.getInfo());

chandu.addList("mern course");
chandu.addList("jaavasc");

console.log(chandu.getcourseList());

