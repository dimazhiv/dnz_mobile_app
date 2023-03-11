import React from 'react';
import { shallow } from 'enzyme';
import DriverItem from './DriverItem';

describe('Snapshot testing DriverItem component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <DriverItem
        dateOfBirth={'01.09.1994'}
        fullName={'Carlos Sainz'}
        nationality={'Spanish'}
        driverId={'alonso'}
        onPress={() => {}}
        onRacesPress={() => {}}
      />
    );
    expect(tree).toMatchSnapshot();
  });
});
