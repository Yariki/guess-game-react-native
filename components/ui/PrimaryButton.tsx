import { View, Text, StyleSheet, Pressable } from "react-native";
import Colors from "../../utils/colors";

export interface PrimaryButtonProps {
    label: string;
    onPress?: () => void;
};

const PrimaryButton : React.FC<PrimaryButtonProps> = (props: PrimaryButtonProps) => {

    function onPressHandler() {
        props.onPress && props.onPress();
    }

    return (
        <>
        <View style={styles.buttonOuterContainer}>
            <Pressable 
                style={({pressed}) => {
                    return pressed ? [styles.buttonInnerContainer, styles.pressed] : styles.buttonInnerContainer;
                }}
                onPress={onPressHandler} 
                android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>{props.label}</Text>
            </Pressable>
        </View>
        </>
    );
};

export default PrimaryButton;

const styles = StyleSheet.create({
    buttonOuterContainer:{
        borderRadius: 28,
        margin: 4,
        overflow: 'hidden'
    },
    buttonInnerContainer: {
        padding: 16,
        backgroundColor: Colors.primary500,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 4, // android only
        shadowColor: 'black', // ios only
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75
    }
});

