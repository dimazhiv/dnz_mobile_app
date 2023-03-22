import React from 'react';
import { shallow } from 'enzyme';
import DriverInfo from './DriverInfo';
import CustomButton from "../../../app/components/GalleryButton/CustomButton";

describe('Snapshot testing DriverInfo component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <CustomButton
       title={'Gallery'}
       onPress={()=>{}}/>
    );
    expect(tree).toMatchSnapshot();
  });
});
