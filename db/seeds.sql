INSERT INTO department (name)
VALUES 
    ('Sales'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
 ('Sales Lead', '100000.00', 1),
 ('Salesperson', '32000.00', 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Raymond', 'Lopez', 1, NULL),
    ('Raylo', 'James', 2, 1);