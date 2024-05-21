import { View, Text } from "react-native";
import { styles } from "./styles";
import { List } from "../List";
import { Empty } from "../Empty";

export function Tasks(){
    return(
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.col}>
                    <Text style={[styles.text, {color: "#4EA8DE"}]}>Criadas</Text>
                    <View style={styles.span}>
                        <Text style={[styles.text, {color: "#fff"}]}>0</Text>
                    </View>
                </View>
                <View style={styles.col}>
                    <Text style={[styles.text, {color: "#8284FA"}]}>Concluídas</Text>
                    <View style={styles.span}>
                        <Text style={[styles.text, {color: "#fff"}]}>0</Text>
                    </View>
                </View>
            </View>
                <Empty />
        </View>
    )
}