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
    }
})


export default friendStyle;
