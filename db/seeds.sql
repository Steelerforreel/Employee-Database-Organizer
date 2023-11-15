INSERT INTO departments (id, dep_name) 
VALUES  (001, 'Accounting'),
        (002, 'Human Resources'),
        (003, 'Operations');

INSERT INTO roles (id, title, salary, department_id) 
VALUES  (001, 'Accountant', 100000, 001),
        (002, 'HR Rep', 50000, 002),
        (003, 'Operations Manager', 80000, 003);


INSERT INTO employees (first_name, last_name, role_id, manager_id) 
VALUES  ('Chrispy', 'Bacon', 001, 003),
        ('Jake', 'Obson', 002, 003),
        ('Phil', 'Ter', 003, 003);