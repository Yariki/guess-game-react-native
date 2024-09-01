import { StyleSheet, View  } from "react-native";
import Colors from "../../utils/colors";

export interface CardProps {
    children?: React.ReactNode;
}

export const Card = ({ children }: CardProps) => {

    return (
        <View style={styles.card}>
            {children}
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        backgroundColor: Colors.primary800,
        borderRadius: 8,
        elevation: 4, // android only
        shadowColor: 'black', // ios only
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 6
    }, 
});