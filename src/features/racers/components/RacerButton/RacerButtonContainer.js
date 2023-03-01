import RacerButton from './RacerButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {setUser} from "../../reducer";

function mapStateToProps(state) {
    return {
        title: "RACER"+state.racers.user.username
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            onPress: setUser
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RacerButton);
