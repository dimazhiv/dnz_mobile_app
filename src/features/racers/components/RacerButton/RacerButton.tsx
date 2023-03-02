import React from 'react';
import {Button} from 'react-native';

export type RacerButtonProps = {
    onPress: () => {}
};

function RacerButton({onPress}: RacerButtonProps) {
    return (<Button title={"RACER BUTTON"} onPress={onPress}/>);
}

export default RacerButton;
