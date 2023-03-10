import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { getRaces, showRacesLoading } from '../../../selectors';
import RacesList from './RacesList';
import { RootState } from '../../../../../setupStore';

function mapStateToProps(state: RootState) {
  return {
    races: getRaces(state),
    showRacesLoading: showRacesLoading(state)
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesList);
