/**
 * Created by Administrator on 2017/3/10.
 */

const  visbilityFilter=(state='SHOW_ALL',action)=>{
  switch (action.type){
    case 'SET_VISIBILITY_FILTER':
      return action.visbilityFilter
    default:
      return state
  }
}

export default visbilityFilter;
