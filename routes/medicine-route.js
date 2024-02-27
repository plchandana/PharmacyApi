const express = require('express');

const {
    findMedicine,
    addMedicine,
    getAllMedicine,
    deleteMedicine,
    updateMedicine,
    uploadImage
} = require('../controllers/medicine-controller');

const {upload} = require('../middleware/multer');

const router = express.Router();

router.get('/all', getAllMedicine);
router.post('/create', addMedicine);
router.delete('/delete/:id', deleteMedicine);
router.put('/edit/:id', updateMedicine);
router.post('/upload_image/:id', upload.single('image'), uploadImage);
router.get('/find/:id', findMedicine);


module.exports = router;
