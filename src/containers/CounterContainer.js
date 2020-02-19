import Counter from '../components/Counter';
import * as actions from '../actions';
import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    number:state.number,
    color:state.color,
})
const mapDispatchToProps = (dispatch)=>({
    onIncrement: ()=> dispatch(actions.increment()),
    onDecrement: ()=> dispatch(actions.decrement()),
    onSetColor: ()=> dispatch(actions.setColor('red')),
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(Counter);

export default CounterContainer;