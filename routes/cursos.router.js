const express = require('express')
const router = express.Router()
const cursosController = require("../controllers/cursos.controllers")

router.post("/", cursosController.createCourse)

router.get("/", cursosController.getCourses)

router.get("/:id", cursosController.getCourse)

router.put("/:id", cursosController.updateCourse)

router.delete("/:id", cursosController.deleteCourse)

module.exports = router

