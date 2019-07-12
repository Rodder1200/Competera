const persistedState = localStorage.getItem("storageNotes")
  ? JSON.parse(localStorage.getItem("storageNotes"))
  : {};

export default persistedState;
