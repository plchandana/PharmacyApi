const connection = require('../db/db-connection')

const supplierRegister = (req, res) => {
    connection.query('INSERT INTO supplier VALUES(?,?,?)', [req.body.sid, req.body.name, req.body.email], (err, rows) => {
        if (err) {
            res.json({"Result": "Register Fail!", err})
        } else {
            res.json({"result": "Register Success!"})
        }
    })
}
const supplierDelete=(req,res)=>{
    connection.query('DELETE FROM supplier WHERE sid=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill", err})
            
        } else {
            res.json({"result": "Success"})
        }

    })

}
const allSupplier=(req,res)=>{
    connection.query('SELECT * FROM supplier',(err,rows)=>{
        if (err) {
            res.json({"result": "Faill"})
        } else {
            res.json({"result": "Success",rows})
            console.log(rows)
        }
    })
}
const findSupplier = (req, res) => {
    connection.query('SELECT * FROM supplier WHERE sid=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill", err})
        } else {
            if(rows.sid===rows[0]){
                res.json({"result": "No found Supplier"})
            }
            else{
            res.json({"result": "success", rows})
            }
        }

    })
}
const updateSupplier = (req, res) => {
    connection.query('UPDATE supplier SET name=?,email=? WHERE sid=?', [req.body.name, req.body.email, req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill"})
        } else {
            res.json({"result": "Success"})
        }
    })
}

module.exports = {supplierRegister,supplierDelete,allSupplier,findSupplier,updateSupplier};
