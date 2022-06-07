import axios from "axios";

const dndSpellsApi = axios.create({
    baseURL: "https://www.dnd5eapi.co/api"
})

export const getSpells = async () => {
    const {data} = await dndSpellsApi.get("/spells")
    return data.results
}