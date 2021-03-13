const mysql = require('mysql2');
const cTable = require('console.table');
const { firstQuestion, addDepartmentQuestions, addRoleQuestions, addEmployeeQuestions, updateRoleQuestions } = require ('./inquirerFunctions');
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    password: '',
    database: 'mod12'
  });

function allEmployeeQuery() {
    connection.query(`SELECT employee.id, employee.first_name, employee.last_name, department.name AS department, roles.title, CONCAT(e.first_name, ' ', e.last_name) AS manager
        FROM employee
        INNER JOIN roles                      
        ON employee.role_id = roles.id
        INNER JOIN department
        ON roles.department_id = department.id
        LEFT JOIN employee e
        ON employee.manager_id = e.id;`,
        function(err, res) {
          console.log(cTable.getTable(res));
          if (err) throw err;
        });
}
function allDepartmentQuery() {
    connection.query(`SELECT * FROM department`, function (err, res) {
        console.log(cTable.getTable(res));
        if(err) throw err;
    });
}
function allRoleQuery() {
    connection.query(`SELECT roles.id, roles.title, roles.salary, department.name AS department 
    FROM roles
    INNER JOIN department
    ON roles.department_id = department.id`, 
    function (err, res) {
        console.log(cTable.getTable(res));
        if(err) throw err;
    });
}
function addDepartment() {
    addDepartmentQuestions()
    .then(newDep => {
        connection.query(`INSERT INTO department (name)
            VALUES
            ('${newDep}')`, function(err, res) {
                if (err) throw err;
                console.log('Successfully added new department!');
            });
    }).catch(err => {
        if(err) throw err;
    });  
}
function addRole() {
    addRoleQuestions()
    .then(answers => {
        connection.query(`INSERT INTO roles (title, salary, department_id)
        VALUES
        ('${answers.title}', '${answers.salary}', ${answers.department})`, function(err, res) {
            if (err) throw err;
            console.log('Role added successfully!');
        });
    }).catch(err => {
        if(err) throw err;
    });
}
function addEmployee() {
    addEmployeeQuestions()
    .then(answers => {
        connection.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id)
        VALUES
        ('${answers.firstName}', '${answers.lastName}', ${answers.role}, ${answers.manager})`, function(err, res) {
            if (err) throw err;
            console.log('Employee added!');
        });  
    }).catch(err => {
        if (err) throw err;
    })
}
function updateEmployeeRole() {
    updateRoleQuestions().then(answers => {
        connection.query(`UPDATE employee
        SET
        role_id = ${answers.role}
        WHERE id = ${answers.id}`, function(err, res) {
            if (err) throw err;
            console.log('Updated!');
        });
    }).catch(err => {
        if (err) throw err;
    });
}

module.exports = {
    allEmployeeQuery,
    allDepartmentQuery,
    allRoleQuery,
    addDepartment,
    addRole,
    addEmployee,
    updateEmployeeRole
};