interface Person {
    name: string;
    age: number;
    address?: string;
}

interface Employee extends Person {
    employeeId: number;
    department: string;
}

function getEmployeeDetails(emp: Employee): void {
    console.log(`Name: ${emp.name}`);
    console.log(`Age: ${emp.age}`);
    console.log(`Employee ID: ${emp.employeeId}`);
    console.log(`Department: ${emp.department}`);
    console.log(`Address:  ${emp.address}`);
}

const employee: Employee = {
    name: "Ajay",
    age: 23,
    employeeId: 101,
    department: "IT",
    address: "Pune"
};

getEmployeeDetails(employee);
