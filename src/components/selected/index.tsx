// import das funções(Components) do proprio rect 
import { View, Text } from "react-native";

// import de bibliotecas
import Animated, {SlideInDown,BounceOutDown } from "react-native-reanimated";
import { MaterialIcons } from "@expo/vector-icons";

// import das funções criadas
import {styles} from './styles'
import {theme} from '@/theme'
import {Button} from '@/components/Button'

 type Props = {
    quantity: number,
    onClean: () => void
    onSearch: () => void
}

// Entering e Exiting são propriedades do Animeted para fazer a Animação 
export function Selected({quantity, onClean, onSearch}: Props){
    return(
        <Animated.View style={styles.container} entering={SlideInDown.duration(500)} exiting={BounceOutDown}>
            <View style={styles.header}>
                <Text style={styles.label}>{quantity} ingredientes selecionados</Text>
                <MaterialIcons name="close" size={24} onPress={onClean} color={theme.colors.gray_400}/>
            </View>
            <Button title="Encontrar" onPress={onSearch}/>
        </Animated.View>
      
    )
}