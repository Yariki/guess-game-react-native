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
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb52f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb52f',
        padding: 12,
     }
});