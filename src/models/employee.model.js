var dbConn  = require('../../config/db.config');

var Employee = function(employee){
    this.employee_name          =   employee.employee_name;
    this.employee_email         =   employee.employee_email;
    this.employee_phone_number  =   employee.employee_phone_number;
}

// get all employees
Employee.getAllEmployees = (result) =>{
    dbConn.query('SELECT * FROM employees', (err, res)=>{
        if(err){
            console.log('Error while fetching employees', err);
            result(null,err);
        }else{
            console.log('employees fetched successfully');
            result(null,res);
        }
    })
}

// get employee by ID from DB
Employee.getEmployeeByID = (id, result)=>{
    dbConn.query('SELECT * FROM employees WHERE company_id=?', id, (err, res)=>{
        if(err){
            console.log('Error while fetching employees by id', err);
            result(null, err);
        }else{
            result(null, res);
        }
    })
}

// create new employee
Employee.createEmployee = (employeeReqData, result) =>{
    dbConn.query('INSERT INTO employees SET ? ', employeeReqData, (err, res)=>{
        if(err){
            console.log('Error while inserting data');
            result(null, err);
        }else{
            console.log('employees created successfully');
            result(null, res)
        }
    })
}

// update employee
Employee.updateEmployee = (id, employeeReqData, result)=>{
    dbConn.query("UPDATE employees SET employee_name=?,employee_email=?,employee_phone_number=? WHERE eid = ?", [employeeReqData.employee_name,employeeReqData.employee_email,employeeReqData.employee_phone_number, id], (err, res)=>{
        if(err){
            console.log('Error while updating the employee');
            result(null, err);
        }else{
            console.log("Employee updated successfully");
            result(null, res);
        }
    });
}

// delete employee
Employee.deleteEmployee = (id, result)=>{
    dbConn.query('DELETE FROM employees WHERE eid=?', [id], (err, res)=>{
         if(err){
             console.log('Error while deleting the employee');
             result(null, err);
         }else{
             result(null, res);
         }
     })
}

module.exports = Employee;