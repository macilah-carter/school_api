const express = require('express');
const Units = require('../../database/schema/unit');
const Student = require('../../database/schema/student');
const paginate = require('../../middleware/paginate')


const router = express.Router();


//get students
router.get('/students',paginate(Student), async (req, res) => {
    try {
        return res.status(200).json(res.paginate);
    } catch (error) {
        console.log(error);
        return res.status(500)
    }

});



router.get('/units', async (req, res) => {
    try {
        const students = await Units.find();
        return res.status(200).json(students);
    } catch (error) {
        console.log(error);
        return res.status(500)
    }

});

router.post('/units', async (req, res) => {
    const {name, code } = req.body;
    try {
        const unitExist = await Units.findOne({$or: [{name}, {code} ]});
        if (unitExist){
            return res.status(401).json({msg: "Already exists"});
        }
        const unit = await Units.create({name, code});
        return res.status(200).json(unit);
    } catch (error) {
        console.log(error);
        return res.status(500)
    }

});

module.exports = router;