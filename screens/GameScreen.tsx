
import { View, Text , StyleSheet, Alert} from "react-native";
import { useState,  useEffect } from "react";
import { NumberContainer } from "../components/game/NumberContainer";
import PrimaryButton from "../components/ui/PrimaryButton";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";
import {Ionicons} from '@expo/vector-icons'

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

    useEffect(() => {
        minBoudary = 1;
        minBoudary = 100;
    },[]);

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
                <InstructionText style={styles.instructionTextStyle}>Higher or lower?</InstructionText> 
                <View style={styles.buttonsContainer}>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('higher')}>
                            {/* <View style={styles.iconStyle}> */}
                                <Ionicons name="add" size={24} color="white" />
                            {/* </View> */}
                        </PrimaryButton>
                    </View>
                    <View style={styles.buttonContainer}>
                        <PrimaryButton onPress={() => nextGuessHandler('lower')}>
                            {/* <View style={styles.iconStyle}> */}
                                <Ionicons name="remove" size={24} color="white"/>
                            {/* </View> */}
                        </PrimaryButton>
                    </View>
                    
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
     },
     buttonsContainer: {
        flexDirection: 'row',
     },
     buttonContainer:{
        flex: 1,
     },
     instructionTextStyle: {
        marginBottom: 16,
     },
     iconStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
     }

});