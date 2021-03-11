# module12-challenge

SELECT employee.*, roles.title, CONCAT(e.first_name, ' ', e.last_name) AS manager
FROM employee
INNER JOIN roles                      
ON employee.role_id = roles.id
LEFT JOIN employee e
ON employee.manager_id = e.id;