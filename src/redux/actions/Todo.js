export function getTask(){
  return function(dispatch){
    dispatch({type:''})
  }
}
export function checkTask(payload){
  return {
    type: 'CHECK_TASK',
    payload
  }
}
export function addTask(payload){
  return {
    type: 'ADD_TASK',
    payload
  }
}
export function editTask(payload){
  return {
    type: 'EDIT_TASK',
    payload
  }
}
export function deleteTask(payload){
  return {
    type: 'DELETE_TASK',
    payload
  }
}