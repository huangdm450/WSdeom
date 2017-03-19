/**
 * Created by Administrator on 2017/3/18.
 */

const setSelectType=(state,action)=>{
  switch (action.type){
    case 'SET_SELECT_TYPE':
      return action.filter
    default:
      return state
  }
}
export default setSelectType
