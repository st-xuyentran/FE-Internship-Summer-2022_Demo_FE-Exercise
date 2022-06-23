function setLocalStorage(name, data) {
  localStorage.setItem(name, JSON.stringify(data))
}

function getLocalStorage(name, defaultValue) {
  return JSON.parse(localStorage.getItem(name)) || defaultValue;
}