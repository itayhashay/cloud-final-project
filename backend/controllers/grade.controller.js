const Grades = require("../models/grade.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!"
      });
    }
  
    // Create a Grade
    const grade = new Grades({
      userId: req.body.userId,
      username: req.body.username,
      grade: req.body.grade
    });
  
    // Save Grade in the database
    Grades.create(grade, (err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating the grade."
        });
      else res.send(data);
    });
  };
  

  // Retrieve all Grades from the database
exports.findAll = (req, res) => {
    Grades.getAll((err, data) => {
      if (err)
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving grades."
        });
      else res.send(data);
    });
};
  

// Delete a Grade with the specified id in the request
exports.delete = (req, res) => {
    Grades.remove(req.params.id, (err, data) => {
      if (err) {
        if (err.kind === "not_found") {
          res.status(404).send({
            message: `Not found Grade with id ${req.params.id}.`
          });
        } else {
          res.status(500).send({
            message: "Could not delete Grade with id " + req.params.id
          });
        }
      } else res.send({ message: `Grade was deleted successfully!` });
    });
  };