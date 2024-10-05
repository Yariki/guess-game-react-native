import { View, Image, StyleSheet, Text ,  useWindowDimensions} from "react-native";
import Title from "../components/ui/Title";
import Colors from "../utils/colors";
import PrimaryButton from "../components/ui/PrimaryButton";


export interface GameOverScreenProps {
    roundsNumber?: number;
    userNumber?: number;
    onRestart?: () => void;
}

export const GameOverScreen = ({roundsNumber, userNumber, onRestart}: GameOverScreenProps) => {

    const {width, height} = useWindowDimensions();

    let imageSize = 300;

    const restartHandler = () => {
        if(!onRestart) {
            return;
        }
        onRestart();
    };
    
    if(width < 380) {
        imageSize = 150;
    }
    if(height < 400) {
        imageSize = 80;
    }

    const imageStyle = {
        width: imageSize,
        height: imageSize,
        borderRadius: imageSize / 2
    };

    return (
        <View  style={styles.rootContainer}>
            <Title title="Game Over!"></Title>
            <View style={[styles.imageContainer, imageStyle]}>
                <Image 
                    style={styles.image}
                    source={require('../assets/success.png')} 
                    alt="Success"></Image>
            </View>
            <Text style={styles.summaryText}>Your phone needed <Text style={styles.highlight}>{roundsNumber}</Text> rounds to guess the number <Text style={styles.highlight}>{userNumber}</Text>.</Text>
            <PrimaryButton onPress={restartHandler} label="Start New Game"></PrimaryButton>
        </View>
        );
}

const styles = StyleSheet.create({
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center'
    },
     imageContainer: {
        // width: deviceWidth < 380 ? 200 : 300,
        // height: deviceWidth < 380 ? 200 : 300,
        // borderRadius: deviceWidth < 380 ? 100 : 150,
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
