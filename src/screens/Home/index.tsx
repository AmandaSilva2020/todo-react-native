import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import { Tasks } from "@/src/components/Tasks";

export default function Home() {
  return (
    <View
      style={styles.container}
    >
      <Image 
        source={require('./../../assets/Logo.png')}
        style={styles.image}
      />
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Adicione uma nova tarefa"
          placeholderTextColor= "#808080"
        />
        <TouchableOpacity style={styles.button}>
          <Image 
            source={require('./../../assets/plus.png')}
          />
        </TouchableOpacity>

      </View>
      <View style={styles.contentBox}>
        <Tasks />
      </View>
    </View>
  );
}
