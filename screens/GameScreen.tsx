
import { View, Text , StyleSheet, Alert} from "react-native";
import { useState,  useEffect } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";

export interface GameScreenProps {
    userChoice: number;
    onGameOver: (numOfRounds?: number) => void;
}


function generateRandomBetween(min: number, max: number, exclude: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

let minBoudary = 1;
let maxBoundary = 100;

const GameScreen :  React.FC<GameScreenProps> = ({userChoice, onGameOver}: GameScreenProps) => {

    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, userChoice));

    useEffect(() => {
        if(currentGuess === userChoice) {
            onGameOver();
        }
    }, [currentGuess, userChoice, onGameOver]);

    function nextGuessHandler(direction: 'lower' | 'higher') {

        if(direction === 'lower' && currentGuess < userChoice 
            || 
            direction === 'higher' && currentGuess > userChoice) {

            Alert.alert('Don\'t lie!', 'You know that this is wrong...', [{text: 'Sorry!', style: 'cancel'}]);

            return;
        }

        if(direction === 'lower') {
            maxBoundary = currentGuess;
        } else {
            minBoudary = currentGuess + 1;
        }
        const newRndNumber = generateRandomBetween(minBoudary, maxBoundary, currentGuess);
        setCurrentGuess(newRndNumber);
    }

    return (
        <View style={styles.screen}>
            <InstructionText>Opponent's Guess</InstructionText>
            <NumberContainer number={currentGuess}/>
            <Card>
                <Text>Higher or lower?</Text> 
                <View>
                    <PrimaryButton label="+" onPress={() => nextGuessHandler('higher')}></PrimaryButton>
                    <PrimaryButton label="-" onPress={() => nextGuessHandler('lower')}></PrimaryButton>
                </View>
           </Card>
            {/* <View>LOG Rounds</View> */}
        </View>
    );
}

export default GameScreen;


const styles = StyleSheet.create({
     screen: {
        flex: 1,
        padding: 24

     }
});