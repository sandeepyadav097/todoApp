

export const deleteAll = (storage) => {
  return storage.clearAll();
}

export const updateSavedStorage = (storage, todos) => {
  storage.set("todos", JSON.stringify(todos));
}

export const addToStorage = (storage, newTodos) => {
  storage.set("todos", JSON.stringify(newTodos));
};

export const updateTask = todo => {
  const key = Object.keys(todo).toString();
  const value = todo[key]
  storage.set(key, todo[key])
}

export const getAllData = (storage) => {
 
  const savedTodos=storage.getString("todos")
  return savedTodos ? JSON.parse(savedTodos) : []
};
