import { View, Image, Text } from 'react-native';
import Clipboard from '../../../assets/Clipboard.png';
import { styles } from './style';

export function EmptyList() {
    return (
        <View style={styles.container}>
            <View style={styles.line}/>
            <Image style={styles.image} source={Clipboard} />
            <Text style={styles.textBold}>Você ainda não tem tarefas cadastradas</Text>
            <Text style={styles.text}>Crie tarefas e organize seus itens a fazer</Text>
        </View>
    )
}