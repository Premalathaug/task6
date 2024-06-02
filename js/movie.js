class person{
    constructor(name,age,gender,place,emailid="abc@gmail.com",phoneno){
        this.name=name;
        this.age=age;
        this.gender=gender;
        this.place=place;
        this.emailid=emailid;
        this.phoneno=phoneno;
    }
    static greetings(){
        return "Hello";
    }
    
    }
    
    const swathi=new person("swathi",24,"female","chennai","swathi@gmail.com","9876543210");
    console.log(swathi);

    


