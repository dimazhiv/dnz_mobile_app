import { takeLatest } from 'redux-saga/effects';
import { testSaga } from 'redux-saga-test-plan';
import { initDataRequest, onLoadDriverInfo } from '../sagaActions';
import { _initDataRequest, watchInitDataRequest } from './initDataRequest';
import { DRIVER_INFO_SCREEN } from '../../../rootConstants';
import { navigateTo } from '../../../App';
import { _onDriverNamePress } from './onDriverNamePress';

describe('racersFeature.onDriverNamePress saga', () => {
  it('should do properly actions when driver name pressed', () => {
    const action = { payload: 'driver1', type: 'string' };
    testSaga(_onDriverNamePress, action)
      .next()
      .call(navigateTo, DRIVER_INFO_SCREEN, null)
      .next()
      .put(onLoadDriverInfo(action.payload))
      .next()
      .isDone();
  });
});

describe('racersFeature.initDataRequest saga', () => {
  it('should fire on initDataRequest action', () => {
    const generator = watchInitDataRequest();
    expect(generator.next().value).toEqual(takeLatest(initDataRequest.type, _initDataRequest));
  });
});
