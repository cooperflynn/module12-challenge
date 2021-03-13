const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');
const { firstQuestion } = require('./utils/inquirerFunctions');
const { allEmployeeQuery, allDepartmentQuery, allRoleQuery, addDepartment, addRole, addEmployee, updateEmployeeRole, viewEmployeesByManager, viewEmployeesByDepartment, deleteEmployee } = require('./utils/querys');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    password: '',
    database: 'mod12'
  });
firstQuestion().then(answer => {
  switch(answer.choice) {
    case 'View all employees':
      allEmployeeQuery();
      break;
    case 'View all departments':
      allDepartmentQuery();
      break;
    case 'View all roles':
      allRoleQuery();
      break;
    case 'Add department':
      addDepartment();
      break;
    case 'Add role':
      addRole();
      break;
    case 'Add employee':
      addEmployee();
      break;
    case 'Update employee role':
      updateEmployeeRole();
      break;
    case 'View employees by manager':
      viewEmployeesByManager();
      break;
    case 'View employees by department':
      viewEmployeesByDepartment();
      break;
    case 'Delete employee':
      deleteEmployee();
      break;
  }
}).catch(err => {if (err) throw err;});


