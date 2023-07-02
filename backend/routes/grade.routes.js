module.exports = app => {
    const grades = require("../controllers/grade.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Grade
    router.post("/", grades.create);
  
    // Retrieve all Grades
    router.get("/", grades.findAll);

    // Delete a Grade with id
    router.delete("/:id", grades.delete);

    app.use('/api/grades', router);
};
