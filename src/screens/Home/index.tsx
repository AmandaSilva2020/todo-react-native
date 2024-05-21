import { Text, View, Image } from "react-native";
import { styles } from "./styles";

export default function Home() {
  return (
    <View
      style={[styles.container]}
    >
      <Image 
        source={require('./../../assets/Logo.png')}
        style={styles.image}
      />
      <View style={styles.contentBox}>
        <Text style={styles.text}>Hello World</Text>
        

      </View>
    </View>
  );
}
