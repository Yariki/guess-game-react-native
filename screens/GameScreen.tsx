
import { View, Text , StyleSheet} from "react-native";
import Title from "../components/Title";

export interface GameScreenProps {

}

const GameScreen :  React.FC<GameScreenProps> = (props: GameScreenProps) => {

    return (
        <View style={styles.screen}>
            <Title title="Opponent's Guess"/>
            {/* GUESS */}
            <View>
                <Text>Higher or lower?</Text> 
                {/* + - */}
            </View>
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