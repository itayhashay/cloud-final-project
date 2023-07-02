const sql = require("./db.js");

const Grade = function(json) {
    this.userId = json.userId;
    this.username = json.username;
    this.grade = json.grade;
};
  
Grade.create = (newGrade, result) => {
    sql.query("INSERT INTO grades SET ?", newGrade, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }

      result(null, { id: res.insertId, ...newGrade });
    });
};
  
Grade.getAll = (result) => {
    let query = "SELECT * FROM grades";
  
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("grades: ", res);
      result(null, res);
    });
};
  

Grade.remove = (id, result) => {
    sql.query("DELETE FROM grades WHERE id = ?", id, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      if (res.affectedRows == 0) {
        result({ kind: "not_found" }, null);
        return;
      }
  
      console.log("deleted grades with id: ", id);
      result(null, res);
    });
  };

  module.exports = Grade;