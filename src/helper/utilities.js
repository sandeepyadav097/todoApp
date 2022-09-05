export const addTodos = (todos, newTodo) => {
    const newTodos = [...todos, newTodo];
    return newTodos;
}

export const deleteTodos = (todos, removeTodo) => {
    const filteredTodo = todos.filter(todo => todo != removeTodo);
    return filteredTodo;
}

export const updateTodo = (todos, modalId, modalText) => {
    const newTd = todos.filter(todo => todo.id != modalId);
    newTd.unshift({id:Date.now().toString(), text:modalText});
    return newTd;
}