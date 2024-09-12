import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

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
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: 'white',
        padding: 12,
        maxWidth: '80%',
        minWidth: '20%',
        width: 300
     }
});