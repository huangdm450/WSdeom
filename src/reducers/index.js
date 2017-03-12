/**
 * Created by Administrator on 2017/3/10.
 */
import todos from './todo';
import visbilityFilter from './visbilityFilter';
import {combineReducers} from 'redux';

//将所有的reducers放在一起
const todoApp=combineReducers({
  visbilityFilter,
  todos
})

export default todoApp
