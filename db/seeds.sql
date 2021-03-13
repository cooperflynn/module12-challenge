INSERT INTO department (name)
VALUES 
    ('Sales'),
    ('Legal'),
    ('Engineering');

INSERT INTO roles (title, salary, department_id)
VALUES
 ('Sales Lead', '100000.00', 1),
 ('Salesperson', '32000.00', 1),
 ('Legal Team Lead', '120000.00', 2),
 ('Lawyer', '100000.00', 2),
 ('Senior Engineer', '110000.00', 3),
 ('Junior Engineer', '90000.00', 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Raymond', 'Lopez', 1, NULL),
    ('Raylo', 'Lopez', 2, 1),
    ('Ray', 'James', 3, NULL),
    ('Raymon', 'James', 4, 3),
    ('James', 'Raymond', 5, NULL),
    ('Raymond', 'Raymond', 6, 5);
