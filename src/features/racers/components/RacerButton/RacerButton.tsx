import React from 'react';
import {StyleSheet, Button} from 'react-native';

export type RacerButtonProps = {
    title: string,
    onPress: () => {},
};

function RacerButton({title, onPress}: RacerButtonProps) {
    return (<Button title={title} onPress={() => onPress({username: 'asdas'})}/>);
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'row'
    }
});


export default RacerButton;
