# nodeadminmanagement
Admin and user management


BRANCH : DEV

# 13/07/2023

Created project structure in node js
Dependencies : Node.js, Express.js, MySQL, pm2
Connected MySQL server with "process.env.NODE_ENV" 


# Install Dependencies

In package.json folder you have to install packages with executing command "npm i".
You have to create a development.js in config/ folder.

development.js

module.exports = {
	dbconnection :{
		host: "hostname",
		user: "username",
		database: "db_name",
	    password: "ENTER YOUR MYSQL DB PASSWORD HERE",
		multipleStatements: true,
	  },
	DB_PREFIX: 'AdminManagement'
}

You have to install pm2 to run the project 
"npm i pm2 -g"

You must have ecosystem.config.js in your app.js path
Run project with the command "pm2 start ecosystem.config.js --watch --env development"
Then you have to run this command to see logs "pm2 logs 0"

# Integrated 3 types of login Superadmin, admin, user

1. Super admin have all rights to CRUD operations for users, admin to create ,update, delete. and super admin have the rights to add permission access and remove the access .
2. Admin have rights for the users CRED Operation for users to create, Update, delete user and feed.
3. User have login functionality after that admin gave access particular feeds to show 


# Integrated JWT token to secured algo 
1. 3 Types of user have to login after that created a payload to create jwt token to access cred operations and data shows.
2. Integrated JWT with single login funtionality

# Integrated Permission Module
1. Super admin have rights to edit and update the admins and users to add access to read and write permission

# Integrated log file 
1. Log file can only accessed by super admin after that there is no automation delte log files after 5 mins 

I hope i want some time to complete with user interface now i not much time to complete the task but i do .