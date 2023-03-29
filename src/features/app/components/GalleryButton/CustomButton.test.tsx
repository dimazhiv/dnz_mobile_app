import React from 'react';
import { shallow } from 'enzyme';
import CustomButton from "../../../app/components/GalleryButton/CustomButton";

describe('Snapshot testing CustomButton component', () => {
  test('correct component view', () => {
    const tree = shallow(
      <CustomButton
       title={'Gallery'}
       onPress={()=>{}}/>
    );
    expect(tree).toMatchSnapshot();
  });
});
