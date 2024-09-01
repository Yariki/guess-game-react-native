import {StyleSheet, Text} from 'react-native';
import Colors from '../../utils/colors';


export interface InstructionTextProps {
    children?: React.ReactNode;
}

export const InstructionText = ({children}: InstructionTextProps) => {
    return (
        <Text style={styles.instructionsText}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    instructionsText:{
        color: Colors.accent500,
        fontSize: 24,
    }
});


