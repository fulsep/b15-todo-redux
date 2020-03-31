const initialState = {
  task: [],
}

export default function Todo(state = initialState, action){
  switch(action.type){
    case 'ADD_TASK': {
      const {task} = state
      task.push(action.payload)
      return {
        ...state,
        task
      }
    }
    case 'EDIT_TASK': {
      const {task} = state
      task[action.payload.index].task = action.payload.task
      return {
        ...state,
        task
      }
    }
    case 'DELETE_TASK': {
      let {task} = state
      task = task.filter((v,i) => i!==action.payload)
      console.log(task,action.payload)
      return {
        ...state,
        task
      }
    }
    case 'CHECK_TASK': {
      const {task} = state
      task[action.payload].isComplete = !task[action.payload].isComplete
      return {
        ...state,
        task
      }

    }
    default : {
      return {
        ...state
      }
    }
  }
}