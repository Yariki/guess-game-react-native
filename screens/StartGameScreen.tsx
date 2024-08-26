
import { TextInput, View, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import babelConfig from "../babel.config";


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

    return (
        <>
            <View style={styles.inputContainer}>
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
            </View>
        </>
    );
}

export default StartGameScreen;


const styles = StyleSheet.create({
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: '#4e0329',
        borderRadius: 8,
        elevation: 4, // android only
        shadowColor: 'black', // ios only
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    input: {
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        height: 50,
        width: 50,
        fontSize: 32,
        color: '#ddb52f',
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