/**
 * Created by Administrator on 2017/3/10.
 */
import {connect} from 'react-redux';
import Link from '../components/Link';
import {setVisbility} from '../actions';

const mapStateToProps=(state,ownProps)=>{
  return {
    active: ownProps.filter === state.visbilityFilter
  }
}

const mapDispatchToProps=(dispatch,ownProps)=>{
  return{
    onClick:()=>{
      dispatch(setVisbility(ownProps.filter))
    }
  }
}
const FilterLink=connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link)

export default FilterLink;
