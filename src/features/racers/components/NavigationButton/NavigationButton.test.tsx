import React from 'react';
import { shallow } from 'enzyme';
import NavigationButton from './NavigationButton';

describe('Snapshot testing NavigationButton component', () => {
  test('correct component view', () => {
    const tree = shallow(<NavigationButton title={'<'} onPress={() => {}} />);
    expect(tree).toMatchSnapshot();
  });
});
