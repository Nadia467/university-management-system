//Project   "university Management System"
//Part 1
class Person {
    pername;
    perage;
    constructor(name, age) {
        this.pername = name;
        this.perage = age;
    }
    getName() {
        return this.pername;
    }
}
class Student extends Person {
    rollNumber;
    cources;
    constructor(name, age, rollNumber) {
        super(name, age);
        this.rollNumber = rollNumber;
        this.cources = ["Biology", "Physics", "English"];
    }
    registerForCources() {
        this.cources.push("Urdu");
    }
    getCources() {
        return this.cources;
    }
}
class Instructor extends Person {
    salary;
    cources;
    constructor(name, age, salary) {
        super(name, age);
        this.salary = salary;
        this.cources = ["Biology", "Physics", "English"];
    }
    assignCources() {
        this.cources.push("Urdu");
    }
    getCources() {
        return this.cources;
    }
}
//Part 2
class Cource {
    id;
    name;
    students;
    instructors;
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.students = ["Iqra", "Taha", "Najma"];
        this.instructors = ["Dr.Rohan", "Dr.Fahtay", "Dr.Tahreem"];
    }
    addStudent() {
        this.students.push("Sofia");
    }
    setInstructor() {
        this.instructors.push("Dr.Rasheed");
    }
    getStudent() {
        return this.students;
    }
    getInstructor() {
        return this.instructors;
    }
}
//part 3
class Department {
    name;
    cources;
    constructor(name) {
        this.name = name;
        this.cources = ["Urdu", "Islamiat", "Sindhi"];
    }
    addCources() {
        this.cources.push("Chemistry");
    }
    getCources() {
        return this.cources;
    }
}
// creat student
let student1 = new Student("Nadia", 22, "R1234");
student1.registerForCources();
//creat instructor
let instructor1 = new Instructor("Dr.Arif", 35, "50k");
instructor1.assignCources();
//creat course
let cource1 = new Cource("C345", "chemistry");
cource1.addStudent();
cource1.setInstructor();
//creat department 
let department1 = new Department("ABC department");
department1.addCources();
//check the setup
console.log(student1);
student1.getCources;
console.log(instructor1);
instructor1.getCources;
console.log(cource1);
cource1.getStudent;
console.log(Cource);
cource1.getInstructor;
console.log(department1);
department1.getCources;
export {};
