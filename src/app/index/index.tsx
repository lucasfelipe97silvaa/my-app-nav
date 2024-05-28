import { View, Text, ScrollView, Alert} from "react-native";
import { styles } from "./styles";
import { Ingredient } from "@/components/ingredient";
import { useEffect, useState } from "react";
import { Selected } from "@/components/selected";

import { services } from "@/services";

export default function home(){
    const [selected, setSelected] = useState<string[]>([]);
    const [ingredient, setIngredient] = useState<IngredientResponse[]>([]);

    function hedlerToggleSelected(value: string){ //Includes => vai verificar se a variavel esta sendo usada
        console.log(value)
        if(selected.includes(value)){
            return setSelected((state) => state.filter((item) => item !== value))
        }
        
        setSelected((state) => [...state, value])
        console.log(selected);
    }

    function hendlerClearSelected(){
        Alert.alert("Limpar", "Deseja limpar tudo?",[
            {text: "não", style:"cancel"}, {text:"sim", onPress: () => setSelected([])}
        ])
        
    } 
    
    useEffect(() =>{
        services.ingredients.findAll().then(setIngredient)
    },[])

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
                {ingredient.map((item) => (
                    <Ingredient key={item.id} name={item.name} selected={selected.includes(item.id)} image={`${services.storage.imagePath}/${item.image}`} onPress={()=>hedlerToggleSelected(item.id)}/>
                ))}
            </ScrollView>
            { selected.length > 0 && 
                <Selected quantity={selected.length} onClean={hendlerClearSelected} onSearch={() => {}}/>

            }
        </View>
    )
}


// {Array.from({length:100}).map((item, index)=>(
//     <Ingredient key={index}
//     name = "Maça" image="" selected={selected.includes(String(index))} 
//     onPress={()=>hedlerToggleSelected(String(index))}
//     /> 
// ))}