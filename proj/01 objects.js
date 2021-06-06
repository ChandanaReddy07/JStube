var User=function(firstName,courceCount){
    this.firstName=firstName;
    this.courceCount=courceCount;
    this.getCourceCount=function(){
        console.log(`Course count is: ${this.courceCount}`);
    };
};

User.prototype.getFirstName=function(){
    console.log(`this is my first name : ${this.firstName}`);
}


var hitesh=new User("hitesh");
console.log(hitesh);
hitesh.getFirstName();
if(hitesh.hasOwnProperty("firstName")){
    hitesh.getFirstName();
}

//var sam=new User("sam",3);
//console.log(hitesh);