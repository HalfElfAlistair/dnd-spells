import axios from "axios";

const dndSpellsApi = axios.create({
    baseURL: "https://www.dnd5eapi.co/api"
})

const dndSpellApi = axios.create({
    baseURL: "https://www.dnd5eapi.co"
})

export const getSpells = async (query) => {
    const {data} = await dndSpellsApi.get(query ? `/spells?${query}` : "/spells")
    return data.results
}

export const getClasses = async () => {
    const {data} = await dndSpellsApi.get("classes")
    return data.results
}

export const getSpellsByClass = async (query) => {
    const {data} = await dndSpellsApi.get(`classes/${query}/spells`)
    return data.results
}

export const getSpell = async (path) => {
    const {data} = await dndSpellApi.get(path)
    return data
}