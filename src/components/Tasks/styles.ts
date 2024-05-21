import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    col: {
        flexDirection: "row",
        gap: 8,
    },
    span: {
        backgroundColor: "#333333",
        paddingHorizontal: 8,
        borderRadius: 50
    },
    text: {
        fontWeight: "bold",
    }
})