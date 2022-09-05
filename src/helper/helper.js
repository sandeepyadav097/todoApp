
// Remove all saved Todos
export const deleteAll = (storage) => {
  return storage.clearAll();
}

// update saved todos
export const updateSavedStorage = (storage, todos) => {
  storage.set("todos", JSON.stringify(todos));
}

// add Todos to local storage
export const addToStorage = (storage, newTodos) => {
  storage.set("todos", JSON.stringify(newTodos));
};

// get All saved Todos on app load
export const getAllData = (storage) => {
 
  const savedTodos=storage.getString("todos")
  return savedTodos ? JSON.parse(savedTodos) : []
};
