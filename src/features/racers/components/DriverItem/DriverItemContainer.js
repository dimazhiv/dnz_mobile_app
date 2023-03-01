import DriverItem from './DriverItem';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

const driverTestData = {
    driverId: "abate",
    url: "http:\/\/en.wikipedia.org\/wiki\/Carlo_Mario_Abate",
    givenName: "Carlo",
    familyName: "Abate",
    dateOfBirth: "1932-07-10",
    nationality: "Italian"
};


function mapStateToProps(state) {
    const {
        driverId,
        url,
        givenName,
        familyName,
        dateOfBirth,
        nationality
    } = driverTestData;

    return {
        driverId,
        url,
        givenName,
        familyName,
        dateOfBirth,
        nationality

    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(
        {
            //TODO DZ:Add Action to open driver info in future
        },
        dispatch
    );
}

export default connect(mapStateToProps, mapDispatchToProps)(DriverItem);
