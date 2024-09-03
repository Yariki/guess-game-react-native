import {StyleSheet, Text} from 'react-native';
import Colors from '../../utils/colors';


export interface InstructionTextProps {
    style?: any;
    children?: React.ReactNode;
}

export const InstructionText = ({style, children}: InstructionTextProps) => {
    return (
        <Text style={[styles.instructionsText, style]}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionsText:{
        fontFamily: 'open-sans',
        color: Colors.accent500,
        fontSize: 24,
    }
});


