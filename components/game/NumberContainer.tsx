import { View, Text, StyleSheet, Dimensions } from "react-native";
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

 const deviceWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: deviceWidth < 380 ? 12 : 24,
        margin: deviceWidth < 380 ? 12 : 24,
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 24
    },
    number: {
        color: Colors.accent500,
        fontSize: deviceWidth < 380 ? 24 : 36,
        fontWeight: 'bold',
        fontFamily: 'open-sans-bold'
    }
});