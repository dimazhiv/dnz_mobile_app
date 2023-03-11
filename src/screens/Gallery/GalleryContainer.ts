import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../setupStore';
import Gallery from './Gallery';
import { onLoadPhotosList } from '../../features/gallery/sagaActions';

function mapStateToProps(state: RootState) {
  return {};
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
      onPress: onLoadPhotosList
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Gallery);
