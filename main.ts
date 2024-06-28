           //Project   "university Management System"
                        //Part 1
class Person{
    pername:string;
    perage: number;
    constructor(name:string,age:number){
        this.pername = name;
        this.perage = age;
    }
getName():string{
   return this.pername;
}
}
class Student extends Person{
     rollNumber!:string;
    cources!:string[];
    constructor(name:string,age:number,rollNumber:string){
        super(name,age);
        this.rollNumber! = rollNumber;
        this.cources! =["Biology","Physics","English"];
    }
registerForCources(): void {
    this.cources!.push("Urdu");
}
getCources():string[]{
    return this.cources!;
}
}
class Instructor extends Person{
    salary!:string;
   cources!:string[];
    constructor(name:string,age:number,salary:string){
        super(name,age)
        this.salary! = salary;
        this.cources = ["Biology","Physics","English"];
    }
assignCources():void{
    this.cources!.push("Urdu")
}
getCources():string[]{
    return this.cources!;
}
}
                    //Part 2
class Cource{
    id!:string;
    name!:string;
    students!:string[];
    instructors!:string[]
    constructor(id:string,name:string){
        this.id! = id;
        this.name! = name;
        this.students! = ["Iqra","Taha","Najma"];
        this.instructors! = ["Dr.Rohan","Dr.Fahtay","Dr.Tahreem"];
    }
    addStudent():void{
        this.students!.push("Sofia");
    }
    setInstructor():void{
        this.instructors!.push("Dr.Rasheed");
    }
    getStudent():string[]{
        return this.students!;
    }
    getInstructor():string[]{
        return this.instructors!;
    }
}
                     //part 3
class Department{
    name!:string;
    cources!:string[];
    constructor(name:string){
        this.name! = name;
        this.cources! = ["Urdu","Islamiat","Sindhi"];
    }
addCources():void{
    this.cources!.push("Chemistry");
}
getCources():string[]{
    return this.cources!;
}
}

// creat student
let  student1 = new Student("Nadia",22,"R1234");
student1.registerForCources();
//creat instructor
let instructor1 = new Instructor("Dr.Arif",35,"50k");
instructor1.assignCources();
//creat course
let cource1 = new Cource("C345","chemistry");
cource1.addStudent();
cource1.setInstructor();
//creat department 
let department1 = new Department("ABC department");
department1.addCources();

//check the setup
console.log(student1);
student1.getCources
console.log(instructor1);
instructor1.getCources
console.log(cource1);
cource1.getStudent
console.log(Cource);
cource1.getInstructor
console.log(department1);
department1.getCources