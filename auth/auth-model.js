const db = require("../database/db-config.js");

module.exports = {
  addParent,
  findParent,
  findParentById,
  addAssistant,
  findAssistant,
  findAssistantById
};

async function addParent(user) {
  const [id] = await db("parent").insert(user, "id");

  return findParentById(id);
}

function findParent(filter) {
  return db("parent").where("parent.email", filter);
}

function findParentById(id) {
  return db("parent")
    .where({ id })
    .first();
}

// --- ASSISTANT

async function addAssistant(user) {
  const [id] = await db("assistant").insert(user, "id");

  return findAssistantById(id);
}

function findAssistant(filter) {
  return db("assistant").where("assistant.email", filter);
}

function findAssistantById(id) {
  return db("assistant")
    .where({ id })
    .first();
}
