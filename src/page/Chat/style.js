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
    infoContent:{
        flexDirection: 'column',
        flex: 1,
        marginLeft: 10
    },
    dot: {
        width:10,
        height: 10,
        borderRadius: 5,
        backgroundColor: colors.green,
        marginHorizontal: 5
    },
    avatar: {
        width:  35, 
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
        fontSize:  12,
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
        width:  50,
        height: 50,
        borderRadius: 50
    },
    nameConversation: {
        fontSize: 14,
        fontWeight: 'medium',
        color:  colors.black
    },
    lastMessage: {
        fontSize: 12,
        color:  colors.gray,
        fontWeight: 'regular',
        marginTop: 5
    },
    time: {
        fontWeight:  'regular',
        fontSize: 12,
        color: colors.black
    }
})

export default chatStyle;