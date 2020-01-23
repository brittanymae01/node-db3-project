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

//not working
function findSteps(id) {
  // select steps.id, schemes.scheme_name, steps.step_number, steps.instructions
  // from steps
  // join schemes on schemes.id = steps.scheme_id
  // where schemes.id = 1;
  return db("steps")
    .join("schemes", "schemes.id", "steps.scheme_id")
    .select(
      "steps.id",
      "schemes.scheme_name",
      "steps.step_number",
      "steps.instructions"
    )
    .where("scheme_id", id)
    .first();
}

function add(scheme) {
  return db("schemes")
    .returning("id")
    .insert(scheme)
    .then(ids => {
      return findById(ids[0]);
    });
}

function update(changes, id) {
  return db("schemes")
    .returning("id")
    .where({ id })
    .update(changes)
    .then(ids => {
      return findById(ids[0]);
    });
}

function remove(id) {
  return db("schemes")
    .where("id", id)
    .del();
}
