import { View, Text, StyleSheet } from "react-native";
import Colors from "../../utils/colors";

export interface NumberContainerProps {
    number: number;
    children?: React.ReactNode;

}

export const NumberContainer = ({number, children}: NumberContainerProps) => {

    return (
    <>
        <View style={styles.container}>
            <Text style={styles.number}>{number}</Text>
        </View>
    </>);
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 24,
        borderRadius: 10,
        marginBottom: 24,
        alignItems: 'center',
        justifyContent: 'center'
    },
    number: {
        color: Colors.accent500,
        fontSize: 36,
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    }
});