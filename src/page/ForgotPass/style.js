import { StyleSheet } from "react-native";
const forgotPassStyle = StyleSheet.create({
    container: {  
        flex: 1,
        backgroundColor: '#A7F2D7',
      },
      header: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 16
      },
      image: {
        width: 23,
        height: 23
      },
      avatarContainer: {
        marginVertical: 50,
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
      },
      add: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 155,
        right: 120
      },
      avatar: {
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
      },
      textHeader: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#000000'
      },
      text: {
        marginLeft: 20,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 24
      },
      input: {
        margin: 20,
        borderColor: '#000000',
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 13,
        marginTop: 8
      },
      button: {
        backgroundColor: '#41C8E5',
        padding: 13,
        borderRadius: 10,
        margin: 20
      },
      buttonText: {
        color: '#000000',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold'
      }
})

export default forgotPassStyle