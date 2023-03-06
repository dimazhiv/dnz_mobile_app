import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getCurrentPageDriverIds } from '../../selectors';
import DriversList from './DriversList';
import { RootState } from '../../../../setupStore';

function mapStateToProps(state: RootState) {
  return {
    driversIds: getCurrentPageDriverIds(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(DriversList);
