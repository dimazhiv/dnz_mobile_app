import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomButton from './CustomButton';
import { onGalleryButtonPress } from '../../sagaActions';

function mapStateToProps(state) {
  return {
    title: 'Gallery feature'
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPress: onGalleryButtonPress
    },
    dispatch
  );
}

//Examples to dispatch actions
// const mapDispatchToProps = (dispatch) => ({ action: () => dispatch(action()) })
// 2) const mapDispatchToProps = (dispatch) => ({ action: bindActionCreators(action, dispatch) })
// 3) const mapDispatchToProps = { action }


export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
