function getEmployeeDetails(emp) {
    console.log("Name: ".concat(emp.name));
    console.log("Age: ".concat(emp.age));
    console.log("Employee ID: ".concat(emp.employeeId));
    console.log("Department: ".concat(emp.department));
    console.log("Address:  ".concat(emp.address));
}
var employee = {
    name: "Ajay",
    age: 23,
    employeeId: 101,
    department: "IT",
    address: "Pune"
};
getEmployeeDetails(employee);
