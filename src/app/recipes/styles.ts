import { StyleSheet } from "react-native";
import { theme } from '@/theme';


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 28,
    },
    header:{
        paddingHorizontal: 32,
        paddingTop:62,
        marginBottom: 12,
    },
    title:{
        fontSize: theme.fonts.size.heading.md,
        fontFamily: theme.fonts.family.bold,
        marginTop: 10,
        paddingLeft:10,
    },

});