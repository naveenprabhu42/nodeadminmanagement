# nodeadminmanagement
Admin and user management

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