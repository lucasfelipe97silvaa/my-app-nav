import { Text, Pressable, Image } from "react-native";
import { styles } from './style';

export function Ingredient(){

    return(
        <Pressable style={styles.container}>
            <Image source={require("@/assets/apple.png")}/>
            <Text>Maça</Text>        
        </Pressable>
    ); 
}