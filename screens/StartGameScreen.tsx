
import { TextInput, View, StyleSheet, Alert, Text, useWindowDimensions, KeyboardAvoidingView, ScrollView } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import babelConfig from "../babel.config";
import Colors from "../utils/colors";
import Title from "../components/ui/Title";
import { Card } from "../components/ui/Card";
import { InstructionText } from "../components/ui/InstructionText";


export interface StartGameScreenProps {
    onPickNumber: (selectedNumber: number) => void;
}

/**
 * StartGameScreen component.
 * 
 * This component represents the screen where the game starts.
 * It is responsible for rendering the initial game setup.
 * 
 * @component
 */
const StartGameScreen: React.FC<StartGameScreenProps> = (props: StartGameScreenProps) => {
    const [enteredValue, setEnteredValue] = useState('');

    const {width, height} = useWindowDimensions();

    function numberInputHandler(inputText: string) {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    function resetInputHandler() {
        setEnteredValue('');
    }

    function confirmInputHandler() {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            // show alert...
            Alert.alert('Invalid number!', 
                'Number has to be a number between 1 and 99.', 
                [{ text: 'OK', style: 'destructive', onPress: resetInputHandler }]
            );
            return;
        }
        console.log('Valida number!');
        props.onPickNumber(chosenNumber);
    }

    const marginTopDistance = height < 380 ? 30 : 100;

    return (
        <>
        <ScrollView style={styles.screen}>
                <KeyboardAvoidingView style={styles.screen} behavior="position">
                    <View style={[styles.rootContainer, {marginTop: marginTopDistance}]}>
                        <Title title="Gues My Number"></Title>
                    
                        <Card>
                            <InstructionText >Enter the Number:</InstructionText>
                            <TextInput style={styles.input}
                                maxLength={2}
                                keyboardType="number-pad"
                                autoCapitalize="none"
                                autoCorrect={false}
                                value={enteredValue}
                                onChangeText={numberInputHandler}
                            />
                            <View style={styles.buttonsContainer}>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton label="Reset" onPress={resetInputHandler} />
                                </View>
                                <View style={styles.buttonContainer}>
                                    <PrimaryButton label="Confirm" onPress={confirmInputHandler} />
                                </View>
                            </View>
                        </Card>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </>
    );
}

export default StartGameScreen;

//const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    },
    rootContainer: {
        flex: 1,
        marginTop: 100,
        alignItems: 'center'
    },
    input: {
        borderBottomColor: Colors.accent500,
        borderBottomWidth: 2,
        height: 50,
        width: 50,
        fontSize: 32,
        color: Colors.accent500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    buttonContainer: {
        flex: 1
    }
});