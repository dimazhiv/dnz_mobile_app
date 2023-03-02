import DriverItem from './DriverItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {getDriver} from "../../selectors";

function mapStateToProps(state, ownProps) {
    const {
        driverId,
        url,
        givenName,
        familyName,
        dateOfBirth,
        nationality
    } = getDriver(state, ownProps.driverId) || {};

    return {
        driverId,
        url,
        fullName: `${givenName} ${familyName}`,
        dateOfBirth,
        nationality

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {},
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverItem);
