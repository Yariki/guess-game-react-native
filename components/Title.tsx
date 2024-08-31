import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Colors from '../utils/colors';


export interface TitleProps {
    title?: string;
}

const Title : React.FC<TitleProps> = (props: TitleProps) => {
    return (
        <Text style={styles.title}>{props.title}</Text>    
    );
}

export default Title;

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: Colors.accent500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.accent500,
        padding: 12,
     }
});