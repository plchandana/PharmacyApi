const connection = require('../db/db-connection')

const register = (req, res) => {
    connection.query('INSERT INTO user VALUES(?,?,?,?)', [req.body.uid, req.body.name, req.body.email, req.body.password], (err, rows) => {
        if (err) {
            res.json({"Result": "Register Fail!", err})
        } else {
            res.json({"result": "Register Success!",rows})
            
        }
    })
}
const deleteUser = (req, res) => {
    connection.query('DELETE FROM user WHERE id=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill"}, err)
        } else {
            console.log(rows);
            res.json({"result": "Success"})
        }

    })

}
const allUser=(req,res)=>{
    connection.query('SELECT * FROM user',(err,rows)=>{
        if (err) {
            res.json({"result": "Faill"})
        } else {
            res.json({"result": "Success",rows})
            
        }
    })
}

const login = (req, res) => {
    connection.query('SELECT * FROM user WHERE email=? AND password=?', [req.body.email, req.body.password], (err, rows) => {
        
        if (err) {
            res.json({"result": "Login Fail!",err});
        } else {
            if (rows.length === 0) {
                res.json({"Result": "User Not Found"})
            } else {
                res.json({"result": "Login Success", rows});
                
            }
        }
    });
};

module.exports = {login, register,deleteUser,allUser};



