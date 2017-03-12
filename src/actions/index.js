/**
 * Created by Administrator on 2017/3/10.
 */
let nextTodoId=0;
export const  addTodo=(text)=>{
  return{
    type:'ADD_TUDO',
    id:nextTodoId++,
    text
  }
}

export const setVisbility=(visbilityFilter)=>{
  return{
    type:'SET_VISIBILITY_FILTER',
    visbilityFilter
  }
}

export const toggleTodo=(id)=>{
  return{
    type:'TOGGLE_TODO',
    id
  }
}
