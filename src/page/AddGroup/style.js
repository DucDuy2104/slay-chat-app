import { StyleSheet } from "react-native";
import colors from "../../assets/color/colors";

const addGroupStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary_light_green,
        paddingTop: 20,
        paddingHorizontal: 20
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    icon20: {
        width: 20,
        height: 20,
        resizeMode: 'contain'
    },
    hide: {
        display: 'none'
    },
    buttonAddGroup: {
        backgroundColor: colors.green,
        width: '100%',
        padding: 15,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 20
    },
    textButton: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15
    }


})

export default addGroupStyle;