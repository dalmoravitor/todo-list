import { FlatList, View, Text, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { EmptyList } from "../../components/EmptyList";
import { Task } from "../../components/Task";
import { useState, useMemo } from "react";

import Logo from "../../../assets/Logo.png";
import Plus from "../../../assets/plus.png";

export function Home() {
    const [lista, setLista] = useState<{ description: string; completed: boolean }[]>([]);
    const [description, setDescription] = useState('');

    function handleTaskAdd() {
        setLista((prevState) => [
            ...prevState,
            { description, completed: false }, // Nova tarefa começa como não concluída
        ]);
        setDescription('');
    }

    function handleTaskComplete(description: string) {
        setLista((prevState) => {
            // Encontre a tarefa que foi completada
            const taskToComplete = prevState.find((task) => task.description === description);
    
            if (!taskToComplete) return prevState; // Retorna o estado original se a tarefa não for encontrada
    
            // Atualize o estado da tarefa para completada
            const updatedTask = { ...taskToComplete, completed: !taskToComplete.completed };
    
            // Filtre a tarefa da lista original
            const remainingTasks = prevState.filter((task) => task.description !== description);
    
            // Se for completada, mova para o final; se desmarcada, mova para o início
            return updatedTask.completed
                ? [...remainingTasks, updatedTask] // Adiciona a tarefa no final
                : [updatedTask, ...remainingTasks]; // Adiciona a tarefa no início
        });
    }
    

    const completedTasks = useMemo(() => lista.filter((task) => task.completed).length, [lista]);
    const totalTasks = useMemo(() => lista.length, [lista]);

    const deleteTask = (description: string) => {
        setLista((prevLista) => prevLista.filter((task) => task.description !== description));
    };

    return (
        <View style={styles.container}>
            <View style={styles.containerHeader}>
                <Image source={Logo} />
                <View style={styles.inputContainerHeader}>
                    <TextInput
                        style={styles.inputHeader}
                        value={description}
                        onChangeText={setDescription}
                        placeholder="Adicione uma nova tarefa:"
                        placeholderTextColor="#808080"
                    />
                    <TouchableOpacity onPress={handleTaskAdd} style={styles.botaoHeader}>
                        <Image source={Plus} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.containerCounter}>
                <View style={styles.contador}>
                    <Text style={styles.contadorTextoCriadas}>Criadas</Text>
                    <Text style={styles.contadorNumero}>{totalTasks}</Text>
                </View>
                <View style={styles.contador}>
                    <Text style={styles.contadorTextoConcluidas}>Concluídas</Text>
                    <Text style={styles.contadorNumero}>{completedTasks}</Text>
                </View>
            </View>
            {lista.length === 0 ? (
                <EmptyList />
            ) : (
                <FlatList
                    data={lista}
                    keyExtractor={(item) => item.description}
                    renderItem={({ item }) => (
                        <Task
                            description={item.description}
                            completed={item.completed}
                            onComplete={() => handleTaskComplete(item.description)}
                            onDelete={() => deleteTask(item.description)}
                        />
                    )}
                />
            )}
        </View>
    );
}
