import axios from "axios";

const dndSpellsApi = axios.create({
    baseURL: "https://www.dnd5eapi.co/api"
})

export const getSpells = async (query) => {
    const {data} = await dndSpellsApi.get(query ? `/spells?${query}` : "/spells")
    return data.results
}