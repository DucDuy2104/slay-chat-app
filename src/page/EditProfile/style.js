import { StyleSheet } from "react-native";

const editProfileStyle = StyleSheet.create({
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
        alignItems: 'center',
        width: '100%',
        justifyContent: 'center'
      },
      add: {
        width: 24,
        height: 24,
        position: 'absolute',
        top: 150,
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
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000000',
        marginTop: 24
      },
      input: {}
})

export default editProfileStyle