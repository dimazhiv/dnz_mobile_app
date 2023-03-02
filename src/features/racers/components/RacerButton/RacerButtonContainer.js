import RacerButton from './RacerButton';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {onRacerButtonPress} from "../../slice";

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            onPress: onRacerButtonPress
        },
        dispatch
    );
}

export default connect(null, mapDispatchToProps)(RacerButton);
