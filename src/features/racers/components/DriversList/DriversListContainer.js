import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getDriversIds } from '../../selectors';
import DriversList from './DriversList';

function mapStateToProps(state) {
  return {
    driversIds: getDriversIds(state)
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);
