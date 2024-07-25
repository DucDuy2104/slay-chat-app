import { StyleSheet } from "react-native";

const signUpStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0e9e1',
        justifyContent: 'center',
        alignItems: 'center'
    },
    logo: {
        width: 100,
        height: 100
    },
    input: {
        width: '80%',
        paddingVertical: 15,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 20,
        marginBottom: 10,
        paddingHorizontal: 10,
        backgroundColor: 'white',
        color: '#CDCDCD',
        shadowColor: "#CDCDCD",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 50,
        shadowRadius: 40,
    },
    button: {
        width: '40%',
        paddingVertical: 15,
        backgroundColor: '#2997F5',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
    },
    buttonText: {
        color: 'white',
        fontSize: 16
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    title1: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'black'
    },
    text:{
        color: 'black',
        marginTop: 10
    },
    text1:{
        color: '#2997F5',
    }
})


export default signUpStyle;