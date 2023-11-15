const mysql = require('mysql2');
const db = require('./config/connection');
const inquirer = require ('inquirer')

db.connect(function(err) {
  if (err)
  console.log(err)
  else 
  console.log('Connected')
  init()
});

function init() {
  inquirer
  .prompt([
    {
      type: 'list',
      name: 'prompt',
      message: 'What would you like to do?',
      choices: ['View All Departments', 'View All Roles', 'View all Employees', 'Add a Department', 'Add a Role', 'Add an Employee']
    }
  ])
  .then((userResponse) => {
    if (userResponse.prompt === 'View All Departments') {
      getDepartments();
    } else if (userResponse === 'View All Roles') {
      getRoles();
    } else if (userResponse === 'View All Employees') {
      getEmployees(); 
    } else if (userResponse.prompt === 'Add a Department') {
      addDepartments();
    } else if (userResponse.prompt === 'Add a Role') {
      addRole();
    } else if (userResponse.prompt === 'Add an Employee') {
      addEmployee();
    }
  }) 
};

function getDepartments () {
  db.query('SELECT * FROM departments', function (err, results) {
    if (err) {
      console.log(err)
    }
    else {
      console.log (results)
    }
  })
};

function getRoles () {
  db.query('SELECT * FROM roles', function (err, results) {
    if (err) {
      console.log(err)
    }
    else {
      console.log (results)
    }
  })
};

function getEmployees () {
  db.query('SELECT * FROM employees', function (err, results) {
    if (err) {
      console.log(err)
    }
    else {
      console.log (results)
    }
  })
};

function addDepartments () {
  inquirer
  .prompt ([
    {
      type: 'input',
      name: 'departmentAdd',
      message: 'Please give a name for the department.'
    }
  ]).then ((choice) => {
    db.query('INSERT INTO departments (dep_name) VALUES', function (err, results) {
      console.log(results);
    })
  })
};

function addRole () {
  inquirer
  .prompt ([
    {
      type: 'input',
      name: 'roleAdd',
      message: 'Please give a name for the role.'
    },
    {
      type: 'input',
      name: 'salary',
      message: 'Please give a salary amount for the role.',
    },
    {
      type: 'choices',
      name: 'depID',
      message: 'Please give a department ID',
      choices: ['001', '002', '003']
    }
  ]).then ((results) => {
    db.query('INSERT INTO roles (dep_name) VALUES', function (err, results) {
      console.log(results);
    })
  })
};

function addEmployee () {
  inquirer
  .prompt ([
    {
      name: 'firstName',
      type: 'input',
      message: 'Please input employees first name.',
    }, 
    {
      name: 'lastName',
      type: 'input',
      message: 'Please input employees last name.',
    },
    {
      name: "roleName",
      type: "list",
      message: "Please select employees role.",
      choices: ['Accountant', 'HR Rep', 'Operations Manager']
    },
    {
      name: "manager",
      type: "list",
      message: "Please select manager id.",
      choices: ['003']
    }
  ]
  ).then ((choice) => {
    db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id) VALUES', function (err, results) {
      console.log(results);
    })
  })
};

