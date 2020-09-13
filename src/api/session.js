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
  if (params.session_id) setId(params.session_id);
};
const getLocalSession = () => ({ name: getName(), session_id: getId() });

module.exports = { getLocalSession, setLocalSession };
