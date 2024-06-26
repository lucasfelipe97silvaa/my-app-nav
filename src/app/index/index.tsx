import { View, Text, ScrollView} from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/ingredient";
import { useState } from "react";

export default function home(){
    const [selected, setSelected] = useState<string[]>([]);

    function hedlerToggleSelected(value: string){ //Includes => vai verificar se a variavel esta sendo usada
        console.log(value)
        if(selected.includes(value)){
            return setSelected((state) => state.filter((item) => item !== value))
        }
        
        setSelected((state) => [...state, value])
        console.log(selected);
    }
    return(
        <View  style={styles.container}>
            <Text style={styles.title}>
                Escolha {"\n"}
            <Text style={styles.subtitle}>os produtos</Text>
            </Text>
            <Text style={styles.message}>
                Descubra receitas baseadas nos produtos que você escolheu 
            </Text>
            <ScrollView
            contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}
            >
                {/* <Ingredient/> */}
                {Array.from({length:100}).map((item, index)=>(
                    <Ingredient key={index}
                    name = "Maça" image="" selected={selected.includes(String(index))} 
                    onPress={()=>hedlerToggleSelected(String(index))}
                    /> 
                ))}
            </ScrollView>
        </View>
    )
}
