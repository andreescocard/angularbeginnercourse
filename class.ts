class Employee {
    id:number; //! avoid initialize error

    name:string; 

    address:string; 

    constructor(id: number, name: string, address : string){
        this.address = address;
        this.id = id;
        this.name = name;
    }

    getNameWithAddress() : string {
        return this.name + " " + this.address;
    }
}

let john = new Employee(1, "John", "highway 71");

let address = john.getNameWithAddress();

john.id = 1;
john.name = "John";
john.address = "highway 71";

console.log(address)