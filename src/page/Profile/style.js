import { StyleSheet } from "react-native";

const profileStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a0e9e1',
        padding: 16,
      },
      profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 16,
      },
      profileImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 16,
        resizeMode: 'cover'
      },
      profileInfo: {
        flexDirection: 'column',
      },
      profileName: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black'
      },
      profileEmail: {
        fontSize: 14,
        color: 'gray',
      },
      button: {
        flexDirection: 'row',
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 10,
        marginBottom: 16,
        alignItems: 'center',
      },
      buttonText: {
        fontSize: 16,
        marginLeft: 10,
        color: 'black'
      },
      icon: {
        width: 24,
        height: 24,
      },
      logoutButton: {
        backgroundColor: 'white',
      },
      logoutButtonText: {
        color: 'red',
      }
})

export default profileStyle;