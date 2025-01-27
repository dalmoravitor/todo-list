import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginVertical: 10,
        height: 70,
        backgroundColor: '#262626',
        padding: 10,
        borderRadius: 8,
    },
    description: {
        color: '#f2f2f2',
        fontSize: 16,
        width: 280,
        padding: 1
    },
   trash: {
    width: 40,
    height: 40
   },
   check: {
    marginRight: 7
   },
   completedDescription: {
    color: '#808080',
    fontSize: 16,
    width: 280,
    padding: 1,
    textDecorationLine: 'line-through',
   }
})