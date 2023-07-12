module.exports = { 
  apps: [{ 
    name: "admin_management",
     script: './app.js', 
     instances: 1, 
     watch: true, 
     log_file: "logs/combined.outerr.log", 
     ignore_watch: ["logs/*", "public/Highchart/*", "public/chartdata/*", ".pm2/*", "kraken/*"], 
     env: { 
       NODE_ENV: 'development',
       PORT: 8000 },
      
    }] 
  }