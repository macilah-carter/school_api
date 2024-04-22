const express = require('express');
const Student = require('../../database/schema/student');
const Units = require('../../database/schema/unit');
const mongoose = require('mongoose');



const router = express.Router();


//get student by id
router.get('/student/:id', async (req, res) => {
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({error: "No such user with that id"})
        }
        const student = await Student.findById(id).populate('units');
        if (!student){
            return res.status(401).json({error: "No such user"})
        }
        return res.status(200).json(student);
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});


//update student deatils
router.patch('/student/:id', async(req, res) => {
    const updates = req.body;
    const id = req.params.id
    try {
        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({msg: "No such student with that id"})
        }
        const student = await Student.updateOne({_id: id}, {$set: updates});
        return res.status(201).json({msg: "updated successfully"})
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

//delete a student
router.delete('/student/:id', async (req, res) => {
    const id = req.params.id
    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({msg: "No student with such id"});
        }
        const student = await Student.deleteOne({_id: id});
        return res.status(200).json({msg: "Deleted successfully"});
    } catch (error) {
        consol.log(error);
        return res.status(500)
    }
});


//add unts
router.post('/student/:id/units', async (req, res) => {
    const id = req.params.id;
    const {name, code} = req.body
    try {
        if (!mongoose.Types.ObjectId.isValid(id)){
            return res.status(401).json({msg: "No student with such id"})
        }
        const student = await Student.findById(id).populate('units');
        if(!student){
            return res.status(401).json({msg: "No such student"})
        }
        let unit = await Units.findOne({$or :[ {name}, {code} ]});
        if (!unit){
            return res.status(401).json({error: "Error unit is not included"})
        }

        if (!student.units.some(unitId => unitId.equals(unit._id))) {
            student.units.push(unit._id);
            await student.save();
            await student.populate('units');
            return res.status(200).json({ msg: "Units added successfully", student });
        }
        return res.status(401).json({msg: "unit exists"})
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

//delete a unit from students list
router.delete('/student/:id/units/:uid', async (req, res) => {
    const {id, uid} = req.params;
    try {
        if (!mongoose.Types.ObjectId.isValid(id) ){
            return res.status(401).json({msg: "No student with such id"})
        }
        if (!mongoose.Types.ObjectId.isValid(uid) ){
            return res.status(401).json({msg: "No unit with such id"})
        }
        const student = await Student.findById(id).populate('units');
        if(!student){
            return res.status(401).json({msg: "No such student"})
        }
        const unit = await Units.deleteOne({_id: uid})
        return res.status(200).json({msg: "deleted", student})
    } catch (error) {
        console.log(error);
        return res.status(500);
    }
});

module.exports = router;


