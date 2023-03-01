import RacerButton from '../RacerButton/RacerButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

function mapStateToProps(state) {
    return {
        title: "DRIVER" + state.racers.user.username
    }
}

const action = () => ({
    type: 'ON_RACER_BUTTON_PRESS'
});

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            onPress: action
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(RacerButton);
