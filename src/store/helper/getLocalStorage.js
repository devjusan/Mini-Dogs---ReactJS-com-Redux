function getLocalStorage(key, initial) {
  try {
    return JSON.parse(window.localStorage.getItem(key));
  } catch (e) {
    return initial;
  }
}

export default getLocalStorage;
