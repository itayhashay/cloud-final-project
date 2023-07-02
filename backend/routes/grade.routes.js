module.exports = app => {
    const grades = require("../controllers/grade.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Tutorial
    router.post("/", grades.create);
  
    // Retrieve all Tutorials
    router.get("/", grades.findAll);

    // Delete a Tutorial with id
    router.delete("/:id", grades.delete);

    app.use('/api/grades', router);
};