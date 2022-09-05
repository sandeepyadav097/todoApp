import { addTodos , deleteTodos, updateTodo } from '../utilities'
describe('addTodo', ()=>{
   it('should add todo to the list', () => {
      const startTodos = [        
         { id: 1, text : 'First'},        
         { id: 2, text : 'Second' }
      ]     
      
      const newTodo = { id: 3, text: 'Added'} 
      const expected =[
        { id: 1, text : 'First'},        
        { id: 2, text : 'Second' },
        { id: 3, text: 'Added'} 
      ]
      const result = addTodos(startTodos, newTodo)
      expect(result).toEqual(expected)
   })
})


describe('delete todo', ()=>{
    it('should remove todo from the list', () => {
       const startTodos = [        
          { id: 1, text : 'First'},        
          { id: 2, text : 'Second' },
          { id: 3, text: 'Added'} 
       ]     
       
       const removeTodo = { id: 3, text: 'Added'} 
       const expected =[
         { id: 1, text : 'First'},        
         { id: 2, text : 'Second' }
       ]
       const result = deleteTodos(startTodos, removeTodo)
       expect(result).toEqual(expected)
    })
 })

 describe('update todo', ()=>{
    it('should udpate a todo from the list', () => {
       const startTodos = [        
          { id: 1, text : 'First'},        
          { id: 2, text : 'Second' },
          { id: 3, text: 'I will be updated'} 
       ]     
       
       const modalId = 3;
       const modalText = 'I have been updated'
       const expected =[
         { id: 1, text : 'First'},        
         { id: 2, text : 'Second' },
         { id: modalId, text: modalText}
       ]
       const result = updateTodo(startTodos, modalId, modalText)
       expect(result).toEqual(expected)
    })
 })