const mysql = require('mysql2');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    // Your MySQL username
    user: 'root',
    password: '',
    database: 'mod12'
  });

connection.query(`SELECT employee.id, employee.first_name, employee.last_name, roles.title, CONCAT(e.first_name, ' ', e.last_name) AS manager
    FROM employee
    INNER JOIN roles                      
    ON employee.role_id = roles.id
    LEFT JOIN employee e
    ON employee.manager_id = e.id;`,
    function(err, res) {
        if (err) throw err;
        console.table(res);
    });