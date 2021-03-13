const inquirer = require('inquirer');

function firstQuestion() {
    return new Promise((res, rej) => {
        inquirer.prompt([{
            type: 'list',
            name: 'choice',
            message: 'Select one:',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role','Add employee', 'Update employee role']
        }]).then(answer => {
            res(answer);
        }).catch(err => {
            if (err) rej(err);
        });
    });
    
}
function addDepartmentQuestions() {
    return new Promise((res, rej) => {
        inquirer.prompt([{
            type: 'input',
            name: 'department',
            message: 'Enter new department name:',
            validate: answer => {
                if(answer){
                    return true;
                } else {
                    console.log('Enter department name!');
                    return false;
                }
            }
        }]).then(answer => {
            res(answer.department);
        }).catch(err => {
            if (err) rej(err);
        })
    });
}
function addRoleQuestions() {
    return new Promise((res,rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'title',
                message: 'Enter job title:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter job title!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'salary',
                message: 'Enter salary(ex: 10000.00):',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter salary!');
                        return false;
                    }
                }  
            },
            {
                type: 'input',
                name: 'department',
                message: 'Enter department id:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter department ID!');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            res(answers);
        }).catch(err => {
            if (err) rej(err);
        });
    })
}
function addEmployeeQuestions() {
    return new Promise((res, rej) => {
        inquirer.prompt([
            {
                type: 'input',
                name: 'firstName',
                message: 'Enter first name:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter first name!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'lastName',
                message: 'Enter last name:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter last name!');
                        return false;
                    }
                }  
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter role id:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter role ID!');
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'manager',
                message: 'Enter managers id:',
                validate: answer => {
                    if(answer){
                        return true;
                    } else {
                        console.log('Enter managers ID!');
                        return false;
                    }
                }
            }
        ]).then(answers => {
            res(answers);
        }).catch(err => {
            if (err) rej(err);
        });
    })
}
function updateRoleQuestions() {
    return new Promise((res, rej) => {
        const employees = 
        inquirer.prompt([
            {
                type: 'input',
                name: 'id',
                message: 'Enter employee id:'
            },
            {
                type: 'input',
                name: 'role',
                message: 'Enter new role:'
            }
        ]).then(answer => {
            res(answer);
        }).catch(err => {
            if(err) rej(err);
        });
    });
}
module.exports = {
    firstQuestion,
    addDepartmentQuestions,
    addRoleQuestions,
    addEmployeeQuestions,
    updateRoleQuestions
};