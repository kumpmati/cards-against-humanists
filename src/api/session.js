// id
const setId = (id) => localStorage.setItem("session-id", id);
const getId = () => localStorage.getItem("session-id");

// name
const setName = (name) => localStorage.setItem("session-name", name);
const getName = () => localStorage.getItem("session-name");

// session
const setLocalSession = (params) => {
  if (!params) return;
  if (params.name) setName(params.name);
  if (params.sid) setId(params.sid);
};
const getLocalSession = () => ({ name: getName(), sid: getId() });

module.exports = { getLocalSession, setLocalSession };
