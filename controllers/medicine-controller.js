const connection = require('../db/db-connection')

const getAllMedicine = (req, res) => {
    connection.query('select * from medicine', (err, rows) => {
        if (err) {
            res.json({"result": "Faill"})
        } else {
            console.log(rows)
           res.json({"result": "Success", rows})
           
        }
    })
}

const findMedicine = (req, res) => {
    connection.query('SELECT * FROM medicine WHERE mid=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill", err})
        } else {
            res.json({"result": "success", rows})
        }

    })
}

const addMedicine = (req, res) => {
    connection.query('INSERT INTO  medicine VALUES(?,?,?,?,?,?)', [req.body.mid, req.body.name, req.body.qty, req.body.price, req.body.sid, req.body.img], (err, rows) => {
        if (err) {
            res.json({"result": "Faill"}, err)
        } else {
            res.json({"result": "Success"})
        }
    })
}

const deleteMedicine = (req, res) => {
    connection.query('DELETE FROM medicine WHERE mid=?', [req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill"}, err)
        } else {
            res.json({"result": "Success"})
        }

    })

}

const updateMedicine = (req, res) => {
    connection.query('UPDATE medicine SET name=?,qty=?,price=?,sid=?,img=? WHERE mid=?', [req.body.name, req.body.qty, req.body.price, req.body.sid, req.body.img, req.params.id], (err, rows) => {
        if (err) {
            res.json({"result": "Faill"})
        } else {
            res.json({"result": "Success"})
            
        }
    })
}

const uploadImage = (req, res) => {

    try {
        if (req.file == undefined) {
            return res.status(400).send({message: "Please upload a file!"});
        }
        connection.query('UPDATE medicine set img=? where  mid=?', [req.file.filename, req.params.id], (err, rows) => {
            if (err) throw err
        })
        return res.status(201).send({
            image: req.file,
            message: 'Image uploaded successfully',
            
        });
    } catch (error) {
        res.status(500).send({error: 'Internal Server Error! Try again, please!'})
    }
}

  

module.exports = {addMedicine, getAllMedicine, deleteMedicine, updateMedicine, uploadImage, findMedicine}
