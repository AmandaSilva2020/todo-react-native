import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#0D0D0D",
        paddingTop: 24
    },
    image:{
        marginHorizontal: "auto",
        marginBottom: 70,
        height: 32
    },
    contentBox: {
        paddingTop: 40,
        backgroundColor: "#1A1A1A",
        flex: 1
    },
    text: {
        color: "#fff"
    },
    form: {
        position: "absolute",
        top: 96,
        zIndex: 10,
        gap: 4,
        flexDirection: "row",
        marginHorizontal: 24
    },
    input: {
        backgroundColor: "#262626",
        flex: 1,
        height: 54,
        padding: 16,
        borderRadius: 6,
        color: "#F2F2F2"
    },
    button: {
        width: 54,
        height: 54,
        backgroundColor: "#1E6F9F",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 6
    }
})