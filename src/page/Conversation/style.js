import { StyleSheet } from "react-native";
import colors from "../../assets/color/colors";

const conversationStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light_green,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
        paddingVertical: 10
    },
    icon18: {
        width: 18,
        height: 18,
        resizeMode: 'contain'
    },
    image35: {
        width: 35,
        height: 35,
        borderRadius: 35,
        marginLeft: 12
    },
    headerContent: {
        flex: 1,
        marginLeft: 12,
        flexDirection: 'column'
    },
    name: {
        fontSize: 14,
        fontWeight: 'medium',
        color: colors.black,
        marginBottom: 2
    },
    active: {
        fontSize: 10,
        fontWeight: 'medium',
        color: colors.green,
        textAlignVertical: 'center',
        alignItems: 'center'
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 10,
        backgroundColor: colors.green,
        marginTop: 1
    },
    messageContainer: {
        padding: 10,
        borderRadius: 8,
        backgroundColor: colors.yourText,
        maxWidth: 300,
        marginTop: 10,
        alignSelf: 'baseline'
    },
    messageContent: {
        fontSize: 16,
        color: colors.white,
        fontWeight: 'regular'
    },
    myContainer: {
        backgroundColor: colors.myText,
        alignSelf: 'flex-end'
    },
    flat: {
        paddingHorizontal: 20,
        flex: 1,
        paddingBottom: 20,
    },
    flatContainer: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        paddingTop: 10
    },
    footer: {
        width: '100%',
        paddingVertical: 10,
        paddingHorizontal: 20,
        flexDirection: 'row',
        backgroundColor: colors.white,
        alignItems: 'center'
    },
    input: {
        flex: 1,
        fontSize: 16,
        fontWeight: 'medium'
    },
    image26: {
        width: 26,
        height: 26,
        resizeMode: 'contain'
    },
    image15: {
        width: 15,
        height: 15,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    miniName: {
        fontSize: 10,
        fontWeight: 'medium',
        color: "#e4eaf5",
        marginLeft: 5
    },
    flexContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },
    hide: {
        display: 'none'
    }


})

export default conversationStyle;