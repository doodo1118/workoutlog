import UserIndexes from '../components/UserIndexes';
import * as actions from '../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    partners: state.partnersManager.partners,
})

const mapDispatchToProps = (dispatch)=>({
    focusOn: (routineId)=>{
        dispatch(actions.focusOn(routineId));
    },
})

const UserIndexesContainer = connect(mapStateToProps, mapDispatchToProps)(UserIndexes);

export default UserIndexesContainer;
