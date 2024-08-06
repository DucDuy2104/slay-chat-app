import { StyleSheet } from "react-native";
import colors from "../../assets/color/colors";

const chatStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light_green,
        paddingHorizontal: 20,
        paddingTop: 20
    },
    header: {
        width: "100%",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 10
    },
    infoContent: {
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.green,
        marginHorizontal: 5
    },
    avatar: {
        width: 35,
        height: 35,
        borderRadius: 35,
        backgroundColor: "#fff"
    },
    name: {
        fontSize: 16,
        fontWeight: 'medium',
        color: colors.black
    },
    active: {
        fontSize: 12,
        fontWeight: 'medium',
        color: colors.green
    },
    conversationContainer: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: colors.white,
        borderRadius: 10,
        marginBottom: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center'
    },
    image50: {
        width: 50,
        height: 50,
        borderRadius: 50
    },
    nameConversation: {
        fontSize: 14,
        fontWeight: 'medium',
        color: colors.black
    },
    lastMessage: {
        fontSize: 12,
        color: colors.gray,
        fontWeight: 'regular',
        marginTop: 5
    },
    time: {
        fontWeight: 'regular',
        fontSize: 12,
        color: colors.black
    },
    button30: {
        height: 40,
        borderRadius: 8,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 10
    },
    icon20: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    textButton: {
        color: 'black',
        fontWeight: 'medium',
        fontSize: 14,
        marginRight: 5
    },
    overLay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalCenterView: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalView: {
        backgroundColor: 'white',
        borderRadius: 20,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 0.1,
        width: 300,
        height: 500,
        backgroundColor: '#C3DBA7'
    },
    createGroupHeader: {
        fontSize: 16,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 20
    },
    iconClosePosition : {
        position: 'absolute',
        top: 20,
        right: 20
    },
    friendContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white',
        borderRadius: 8,
        marginBottom: 10
    },
    image30: {
        width: 30,
        height: 30,
        borderRadius: 30,
        backgroundColor: 'white'
    },
    nameContainer: {
        marginLeft: 10,
        flex: 1
    },
    name :{
        fontSize: 16,
        fontWeight: 'medium',
        color: colors.black
    },
    mail: {
        fontSize: 12,
        fontWeight: 'regular',
        color: "#ACACAC"
    },
    check: {
        width: 30,
        height: 30,
        resizeMode: 'contain'
    }
    
    

})

export default chatStyle;