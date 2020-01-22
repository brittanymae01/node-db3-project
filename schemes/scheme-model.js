const db = require("../data/dbConfig");

module.exports = {
  find,
  findById,
  findSteps,
  add,
  update,
  remove
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes")
    .where({ id })
    .first();
}

function findSteps(id) {
  return db("steps as s")
    .join("schemes as sch", "sch.id", "s.scheme_id")
    .select("s.step_number", "sch.intructions", "sch.scheme_name")
    .where("s.scheme_id", id);
}

function add(scheme) {
  return db("schemes")
    .returning("id")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

//not working
function update(id, changes) {
  return db("schemes")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}
