import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#292827'
    },
    image: {
        width: 150,
        height: 150,
    },
    timerBox: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: 300,
    },
    status: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'white',
    },
    chronometer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    time: {
        textAlign: 'center',
        lineHeight: 76,
        fontSize: 64,
        fontWeight: '300',
        color: '#12C1D9'
    },
    btnContainer: {
        justifyContent: 'center',
        width: 125,
        height: 48,
        borderRadius: 5,
        backgroundColor: '#1C95A6',
    },
    btnText: {
        fontSize: 15,
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
    },
    button: {
        display: 'flex',
        justifyContent: 'space-between',
        marginLeft: 35,
        marginRight: 35,
        flexDirection: 'row',
    },
    registrosContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    scroll: {
        display: 'flex',
        width: 300,
        height: 150,
        margin: (35, 10, 35),
        borderRadius: 10,
        backgroundColor: 'rgba(18, 193, 217, 0.42)'
    },
    title: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 16,
        fontWeight: 'bold',
        color: '#E5E5E5'
    },
    registros: {
        display: 'flex',
        maxHeight: 150,
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        borderBottomWidth: 1,
        borderColor: '#12C1D9'
    },
    item: {
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '400',
        color: '#E5E5E5'
    }
});