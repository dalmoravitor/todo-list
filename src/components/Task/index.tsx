import { View, Text, Image, TouchableOpacity } from 'react-native';
import notCompleted from '../../../assets/notCompleted.png';
import trash from '../../../assets/trash.png';
import { styles } from './styles';
import { useState } from 'react';
import completed from '../../../assets/completed.png'

 
type Task = {
    description: string;
    onDelete: (description: string) => void;
    completed: boolean
    onComplete: (description: string) => void;
}



export const Task = (props: Task) => {
    const currentImage = props.completed ? completed : notCompleted;
    const currentDescription = props.completed ? styles.completedDescription : styles.description;

    return (
        <TouchableOpacity onPress={() => props.onComplete(props.description)} style={styles.container}>
            <Image style={styles.check} source={currentImage} />
            <Text style={[styles.description, currentDescription]}>{props.description}</Text>
            <TouchableOpacity onPress={() => props.onDelete(props.description)}>
                <Image style={styles.trash} source={trash} />
            </TouchableOpacity>
        </TouchableOpacity>
    );
};
