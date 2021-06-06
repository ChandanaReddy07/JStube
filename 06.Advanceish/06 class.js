class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    #courseList=[];

    getInfo(){
        return {
            name:this.name,
            email:this.email,
        }
    }
    addList(course){
        this.#courseList.push(course);
    }
    getcourseList(){
        return this.#courseList;
    }
    login(){
        return "You are logged in .."
    }

}

class SubAdmin extends User{
    constructor(name,email){
        super(name,email);
    }
    getAdminInfo(){
        return "I am subadmin";
    }
    login(){
        return "you are loggined in admin";
            
    }
}


module.exports =User;

const tom= new SubAdmin("chandi","mom@mom");
tom.addList("mern course");
tom.addList("jaavasc");
console.log(tom.getInfo());