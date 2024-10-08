import { StyleSheet, ImageBackground,  SafeAreaView } from 'react-native';
import StartGameScreen from './screens/StartGameScreen';
import { LinearGradient } from 'expo-linear-gradient';
import { useState } from 'react';
import GameScreen from './screens/GameScreen';
import { GameOverScreen } from './screens/GameOverScreen';
import Colors from './utils/colors';
import {useFonts}  from 'expo-font'
import AppLoading from 'expo-app-loading';
import {StatusBar} from 'expo-status-bar';


export default function App() {

  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [gameIsOver, setGameIsOver] = useState<boolean>(true);
  const [guessRounds, setGuessRounds] = useState<number>(0);

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });

  if(!fontsLoaded){
    return <AppLoading />;
  }

  function pickedNumberHandler(selectedNumber: number) {
    setUserNumber(selectedNumber);
    setGameIsOver(false);
  }

  function gameOverHandler(rounds: number) {
    setGameIsOver(true);
    setGuessRounds(rounds);
  }

  function restartGameHandler() {
    setGameIsOver(true);
    setUserNumber(null);
    setGuessRounds(0);
  }

  let screen = <StartGameScreen onPickNumber={pickedNumberHandler}/>;

  if(userNumber){
    screen = <GameScreen  userChoice={userNumber} onGameOver={(numberOfTries) =>  gameOverHandler(numberOfTries ?? 0)}/>;
  }

  if(gameIsOver && userNumber){
    screen = <GameOverScreen roundsNumber={guessRounds} userNumber={userNumber} onRestart={restartGameHandler}/>
  }

  return (
    <>
    <StatusBar style='light'/>
    <LinearGradient colors={[Colors.primary800,Colors.accent500]} style={styles.rootScreen}>
      <ImageBackground 
          source={require('./assets/background.png')} 
          resizeMode='cover'
          style={styles.rootScreen}
          imageStyle={styles.backgroundImage}>

        <SafeAreaView style={styles.rootScreen}>
          {screen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1
  },
  backgroundImage: {
    opacity: 0.15
  }
});
