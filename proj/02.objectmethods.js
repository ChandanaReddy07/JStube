var User={
    name:"",
    getUserName:function(){
        console.log(`lalala ${this.name}`);
    },

    
};

var hitesh = Object.create(User);
hitesh.name="chandana reddy";
hitesh.getUserName();
