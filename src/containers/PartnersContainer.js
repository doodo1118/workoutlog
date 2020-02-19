import Partners from '../components/Partners';
import * as actions from '../actions';

import {connect} from 'react-redux';

const mapStateToProps = (state)=>({
    partnersData: state.partnersManager.partners,
})

const mapDispatchToProps = (dispatch)=>({
    onAddPartner: ()=>{
        dispatch(actions.addPartner);
    },
    onDeletePartner: ()=>{
        dispatch(actions.deletePartner);
    },
})

const PartnersContainer = connect(mapStateToProps, mapDispatchToProps)(Partners);

export default PartnersContainer;
