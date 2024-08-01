import { Image, StyleSheet } from "react-native";

const feedbackStyle = StyleSheet.create({
    container: {
        width:'100%',
        height: '100%',
        backgroundColor: '#A7F2D7',
        padding:10
    },
    feedbackcontainer: {
        width: '100%',
        height: 50,
        backgroundColor: 'white',

    },
    button: {
        flexDirection: 'row',
    },
    icon: {
        width: 25,
        height: 25,
        marginTop: 14,
        marginLeft:10
    },
    buttonText: {
        fontSize:25,
        color: 'black',
        fontWeight: 'bold',
        marginLeft: 90, 
        marginTop: 8
    },
    radio: {
        fontSize: 22,
        fontWeight: 'bold',
        color:'black',
        padding: 5,
    },
    
    gui: {
        width: '100%',
        height: 50,
        borderRadius:10,
        backgroundColor: '#41C8E5',
        marginTop: 20,
    },
    chugui: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 27,
        textAlign:'center',
        marginTop: 6
    },
    hide: {
        display: "none"
    }
})
export default feedbackStyle;