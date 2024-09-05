import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


export interface GameOverScreenProps {

}

export const GameOverScreen = ({}: GameOverScreenProps) => {

    return <>
        <View  style={styles.rootContainer}>
            <Title title="Game Over!"></Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/success.png')} 
                    alt="Success"></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>X</Text> rounds to guess the number <Text style={styles.highlight}>Y</Text>.</Text>
            <PrimaryButton onPress={() => {}} label="Start New Game"></PrimaryButton>
        </View>
    </>;
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
     imageContainer: {
        width: 300,
        height: 300,
        borderRadius: 150,
        borderWidth: 3,
        borderColor: Colors.primary500,
        overflow: 'hidden',
        margin: 36
    },
    image: {
        width: '100%',
        height: '100%',
    }
    ,
    summaryText:{
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginHorizontal: 24
    }   ,
    highlight: {
        fontFamily: 'open-sans-bold',
        color: Colors.primary500
    }
});
