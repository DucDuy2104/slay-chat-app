import { StyleSheet } from "react-native";
import colors from "../../assets/color/colors";

const friendStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light_green,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    inputContainer: {
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom:  16,
        backgroundColor: colors.white,
        borderRadius: 8
    },
    input: {
        flex: 1,
        paddingRight: 10
    },
    icon20:{
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    friendContainer: {
        width:  '100%',
        padding: 10,
        borderRadius: 8,
        backgroundColor: colors.white,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        resizeMode: 'cover'
    },
    name: {
        fontSize: 14,
        fontWeight: 'medium',
        color: 'black'
    },
    email: {
        fontSize: 12,
        fontWeight: 'regular',
        color: colors.gray
    },
    nameContent: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    image20: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    btn: {
        width: 30,
        height: 30,
        borderRadius: 6,
        alignItems: 'center',
        justifyContent: 'center'
    },
    backgroundColorGreen: {
        backgroundColor: "#A7F2D7",
        marginRight: 10
    },
    backgroundColorBlue: {
        backgroundColor: "#2997F5"
    },
    overLay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: '#000',
        opacity: 0.3,
        justifyContent: 'center',
        alignItems: 'center'
    },
    hide: {
        display: 'none'
    },
    text: {
        fontSize: 10,
        fontWeight: 'light',
        color: '#fff',
        marginTop: 10
    },
    marginLeft10: {
        marginLeft: 10
    }
    
})


export default friendStyle;
