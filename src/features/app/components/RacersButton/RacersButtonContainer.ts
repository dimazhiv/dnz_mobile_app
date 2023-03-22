import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CustomButton from '../GalleryButton/CustomButton';
import { onRacersButtonPress } from '../../sagaActions';

function mapStateToProps(state) {
  return {
    title: 'Racers feature'
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      onPress: onRacersButtonPress
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(CustomButton);
