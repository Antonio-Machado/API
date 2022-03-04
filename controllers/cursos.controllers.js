const Curso = require("../models/cursos.model")

exports.createCourse = async (req, res) => {
    try{
        let curso = req.body
        const newCurso = await Curso.create(curso)
        res.send(newCurso)
    } catch (error){
        res.status(400).send(error.message)
    }
}

exports.getCourses = async (req, res) => {
    try{
        const filters = req.query
        const cursos = await Curso.find({})
        res.send(cursos)
    }   catch (error){
        res.status(400).send(error.message)
    }
}

exports.getCourse = async (req, res) => {
    try{
        const id = req.params.id
        const curso = await Curso.findById(id)
        if(curso){
            res.send({data: curso, message: "course founded"})
        } else {
            res.status(404).send("Course not found")
        }
    } catch (error){
        res.status(400).send(error.message)
    }
}

exports.updateCourse = async (req, res) => {
    try{
        const courseId = req.params.id
        const courseData = req.body
        const updateCourse = await Curso.findByIdAndUpdate( courseId, { $set: courseData }, {  new: true })
        if(updateCourse){
            res.send({ data: updateCourse, message: "Course updated successfully"})
        }else {
            res.status(400).send("An error has occurred")
        }
    } catch (error){
            res.status(400).send(error.message)
    }
}

    exports.deleteCourse = async (req, res) => {
        try{
            const courseId = req.params.id
            const deletedCourse = await Curso.deleteOne({ _id: courseId })
            if(deletedCourse.deletedCount > 0){
                res.status(200).send({ message: "Course deleted"})
            } else {
                res.status(404).send("Course not found")
            }
        } catch (error){
            res.status(400).send(error.message)
        }
    }