import { View, Image, StyleSheet, Text } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";


export interface GameOverScreenProps {

}


export const GameOverScreen = ({}: GameOverScreenProps) => {

    return <>
        <View  style={styles.rootContainer}>
            <Title title="Gme Over!"></Title>
            <View style={styles.imageContainer}>
                <Image 
                    style={styles.image}
                    source={require('../assets/success.png')} 
                    alt="Success"></Image>
            </View>
            <Text>Your phone needed X rounds to guess the number Y.</Text>
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
});
