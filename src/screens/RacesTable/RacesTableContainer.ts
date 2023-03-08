import { bindActionCreators, Dispatch } from 'redux';
import { connect } from 'react-redux';
import { RootState } from '../../setupStore';
import {setInitialRacesData} from "../../features/racers/slice";
import RacesTable from "./RacesTable";

function mapStateToProps(state: RootState) {
  return {
  };
}

function mapDispatchToProps(dispatch: Dispatch) {
  return bindActionCreators(
    {
        onClearRacesData:setInitialRacesData
    },
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(RacesTable);
