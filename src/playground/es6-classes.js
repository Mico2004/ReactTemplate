class Person {
    constructor(name = "Mickael E"){
        console.log('Constructor: '+name);
        this.name = name;
    }

}

const me = new Person("Mickael Elimelech");
const me1 = new Person();

console.log(me);
console.log(me1);

class Student extends Person{
    constructor(name,grade=100) {
        super(name);
        this.grade = 100;
    }
}

const mickael=new Student();

console.log(mickael)