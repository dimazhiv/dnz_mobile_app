import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getRaces } from '../../../selectors';
import RacesList from './RacesList';
import { RootState } from '../../../../../setupStore';

function mapStateToProps(state: RootState) {
  return {
    races: getRaces(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesList);
