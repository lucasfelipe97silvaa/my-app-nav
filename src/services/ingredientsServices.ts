import { supabase } from "./supabase";

async function findAll(){
    const { data } = await supabase.from("ingrediants").select().order("name").returns<IngredientResponse[]>()

    return data ?? [] ;
}

export { findAll }