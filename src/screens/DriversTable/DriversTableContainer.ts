import { connect } from 'react-redux';
import DriversTable from './DriversTable';
import { showPrevButton } from '../../features/racers/selectors';
import { onNextPagePress, onPrevPagePress } from '../../features/racers/sagaActions';
import { RootStateType } from '../../setupStore';

function mapStateToProps(state: RootStateType) {
  return {
    showPrevButton: showPrevButton(state)
  };
}

const mapDispatchToProps = {
  onPrevPagePress,
  onNextPagePress
};

export default connect(mapStateToProps, mapDispatchToProps)(DriversTable);
