import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1A1A1A',
        flex: 1,
    },
    contadorTextoCriadas: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#4EA8DE',
        width: 70,
        height: 25,
        borderRadius: 12,
        textAlignVertical: 'center',
    },

    contadorTextoConcluidas: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8284FA',
        width: 95,
        height: 25,
        borderRadius: 12,
        textAlignVertical: 'center',
    },
    
    
    contadorNumero: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#fff',
        width: 30,
        height: 25,
        backgroundColor: '#333333',
        borderRadius: 12,
        textAlign: 'center',
        textAlignVertical: 'center',        
        
        
    },

    containerCounter: {
        flexDirection: 'row',
        marginTop: 50,
        justifyContent: 'space-between',
        marginHorizontal: 20,
    },
    contador: {
        flexDirection: 'row',
    },
    containerHeader: {
        alignItems: 'center', 
        paddingTop:  100,
        backgroundColor: '#0D0D0D',
    },
    inputContainerHeader: {
        marginTop: 70,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: -25,

    },
    inputHeader: {
        backgroundColor: '#262626',
        width: 300,
        height: 50,
        borderRadius: 7,
        padding: 10,
        marginRight: 10,
        color: '#f2f2f2',
    },
    botaoHeader: {
        
        backgroundColor: '#1E6F9F',
        width: 50,
        height: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
})