const mysql = require("mysql");
const mysqlConnection = require("./db");

exports.getAllUserDetails = function(id){

    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr){
                    mysqlConnection.query(
                        "SELECT * FROM admin_user WHERE role !='"+user_res.role+"'",
                        (err, results, fields) => {
                        if (!err) {
                            resolve({"msg":"success","data":results});
                        }else{
                            resolve({"msg":"error"});
                        }
                        })
                }else{
                    resolve({"msg":"error"})
                }
                
        })
    })

}
exports.getAllFeed = function(id){

    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr){
                    mysqlConnection.query(
                        "SELECT * FROM feed WHERE user_id IN '"+user_res.permission.feed+"'",
                        (err, results, fields) => {
                        if (!err) {
                            resolve({"msg":"success","data":results});
                        }else{
                            resolve({"msg":"error"});
                        }
                        })
                }else{
                    resolve({"msg":"error"})
                }
                
        })
    })

}

exports.adminLoginValidation = async function(data){
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE name='"+data.username+ "' AND password='"+data.password+ "'",
            async (err, results, fields) => {
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results[0]))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
            })
    })
}
function insertQuery(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "INSERT INTO admin_user(name, email, password ,role ) VALUES('"+data.username+"','"+data.email+"','"+data.password+"','"+data.role+"')",
            async (err, results, fields) => {
                console.log(results)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}
function updateQuery(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "UPDATE admin_user SET name = '"+data.username+"', email = '"+data.email+"', password = '"+data.password+"' , role = '"+data.role+"' , status = '"+data.status+"' WHERE id = "+data.id+"",
            async (err, results, fields) => {
                console.log(err)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}
function updateQueryPermission(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "UPDATE admin_user SET permission = '"+data.permission+"' WHERE id = "+data.id+"",
            async (err, results, fields) => {
                console.log(err)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}
function deleteQuery(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "DELETE FROM admin_user WHERE id="+data.id+"",
            async (err, results, fields) => {
                console.log(results)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}
function insertQueryFeed(data) {
    let resdata;
    
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "INSERT INTO feed(name, url, description ,user_id ) VALUES('"+data.name+"','"+data.url+"','"+data.description+"','"+data.user_id+"')",
            async (err, results, fields) => {
                console.log(results)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}
function updateQueryFeed(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "UPDATE feed SET name = '"+data.name+"', url = '"+data.url+"', description = '"+data.description+"' , user_id = '"+data.user_id+"' , status = '"+data.status+"' WHERE id = "+data.id+"",
            async (err, results, fields) => {
                console.log(err)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}

function deleteQueryFeed(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "DELETE FROM feed WHERE id="+data.id+"",
            async (err, results, fields) => {
                console.log(results)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}

function updateQuery(data) {
    let resdata;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "UPDATE admin_user SET permission = '"+data.permission+"' WHERE id = "+data.id+"",
            async (err, results, fields) => {
                console.log(err)
                if (!err) {
                    resdata = {"msg":"success","data":JSON.parse(JSON.stringify(results))}
                    resolve(resdata);
                }else{
                    resdata = {"msg":"error"}
                    resolve(resdata);
                }
        })
    })
}


exports.createNewUser = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await insertQuery(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await insertQuery(data);
                        resolve(resdata);
                    }
                })
    })

}

exports.updateUser = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await updateQuery(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await updateQuery(data);
                        resolve(resdata);
                    }
                })
    })
}

exports.deleteUser = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await deleteQuery(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await deleteQuery(data);
                        resolve(resdata);
                    }
                })
    })
}

exports.createNewFeed = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await insertQueryFeed(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await insertQueryFeed(data);
                        resolve(resdata);
                    }
                })
    })

}

exports.updateFeed = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await updateQueryFeed(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await updateQueryFeed(data);
                        resolve(resdata);
                    }
                })
    })
}

exports.deleteFeed = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await deleteQueryFeed(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await deleteQueryFeed(data);
                        resolve(resdata);
                    }
                })
    })
}

exports.modifyPermission = function(req){
    let data = req.body;
    let id = req._id;
    return new Promise((resolve, reject) => {
        mysqlConnection.query(
            "SELECT * FROM admin_user WHERE id="+id,
            async (usererr, userdata) => {
                let user_res = JSON.parse(JSON.stringify(userdata[0]))
                if (!usererr && user_res.role == "admin"){
                    if(body.role == "admin" || body.role == "super_admin"){
                        resolve(resdata);
                    }else{
                        resdata = await updateQueryPermission(data);
                        resolve(resdata);
                    }
                    }else if(!usererr && user_res.role == "super_admin"){
                        resdata = await updateQueryPermission(data);
                        resolve(resdata);
                    }
                })
    })
}