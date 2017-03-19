/**
 * Created by Administrator on 2017/3/18.
 */

const addBrowseTimes = (state, action) => {
  switch (action.type) {
    case 'ADD_BROWSE_TIMES':
      return {
        id:action.id,
        total:action.number
      }
    default:
      return state
  }
}

export default addBrowseTimes
