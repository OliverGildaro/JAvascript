


// class administrator{
//     constructor()
//     {
//         this.users = [];
//     }
//     addUsers(user){
//         this.users.push(user);
//     }

//     deleteUsers(){
//         users.forEach(element => {
//             delete element;
//         });
//     }
//     saveBitacoraOnEachAction(){

//     }
//     visitPrivatePage(){

//     }
// }

// class user{
//     constructor(name, id)
//     {
//         this.name = name;
//         this.id = id;
//     }
//     loggin(){

//     }
//     loggout(){

//     }
//     saveBitacoraOnEachAction(){

//     }
    
// }

// class visitor{
//     constructor()
//     {

//     }

//     visistPage(){

//     }
// }

// class privateMember{
//     constructor()
//     {

//     }
//     setPriviligies(){

//     }
//     getPriviligies(){

//     }
// }


// let user1 = new user(new user("oliver", 30));
// let user2 = new user(new user("alvaro", 26));
// let user3 = new user(new user("andres", 27));
// let user4 = new user(new user("ariel", 24));
// administrator.addUsers(user1);

// user1.loggin();



class user{
    constructor(name = "visitor", id = "123"){
        this.name = name;
        this.id = id;
    }
    
}

class administrator extends user{
    constructor(name, id){
        super(name, id);
        this.users = [];

    }
    addUser(user){
        this.users.push(user);
    }

    deleteUser(){
        for (let index = 0; index < array.length; index++) {
            const element = array[index];
            this.users.splice(index, 1);
        }
    }
    show(){
        console.log(this.users);
    }
}

class visitor extends user{
    constructor(){
        super();
    }
   

}

class privateMember extends user{
    constructor(name, id){
        super(name, id);
    }
}

const user1 = new administrator("oliver", 12345);
const user2 = new visitor();
const user3 = new privateMember("kang mina", 34566);

const users = new user();
users.addUser(user1);
users.addUser(user2);
users.addUser(user3);
users.show();




