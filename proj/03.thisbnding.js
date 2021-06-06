var User={
    firstName:  "chandu",
    lastName:"reddy",
    courceCount: 3,
    getInfo:function(){
        console.log(`
        Course count is: ${this.courceCount}
        fistname :${this.firstName}
        last name: ${this.lastName}

        `);
    },
};

var hitesh = Object.create(User);
hitesh.getInfo();

var dj={
    firstName:  "dj",
    lastName:"babu",
    courceCount: 2,
};

User.getInfo.bind(dj)();