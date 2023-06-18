// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "11 Broadway",
}
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newEmployee = {...employee};
    return {
        ...newEmployee,
        [key] : value,
        [key] : value,
    }
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee.streetAddress = "12 Broadway";
    return employee;

    // obj.key = value;
    // return obj;
}

function deleteFromEmployeeByKey(employee, key){
    const newEmployee = {...employee};
    delete newEmployee.name;
    return newEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee.name;
    return employee;
}