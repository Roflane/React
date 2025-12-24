import {Character, Episode, EpisodeDetails} from "./types.ts";

const BASE_URL = "https://rickandmortyapi.com/api/character";

function getEpisodeUrl(season: number, episode: number): string {
    return `https://www.omdbapi.com/?t=Rick&Morty&Season=${season}&Episode=${episode}&apikey=124df000`;
}

export const fetchCharacters = async ():Promise<Character[]> => {
    try {
         const response = await fetch(BASE_URL);
         if (!response.ok) {
             throw new Error("Failed to fetch characters.");
         }
         const data = await response.json();
         return data.results;
    } catch (error) {
        console.log("Failed to fetch characters.", error);
        throw error;
    }
}

export const fetchCharacterById =
    async (id:number):Promise<Character> => {
        try {
            const response = await fetch(`${BASE_URL}/${id}`);
            if (!response.ok) {
                throw new Error("Failed to fetch character.");
            }
            return await response.json();
        } catch (error) {
            console.error("Failed to fetch character.", error);
            throw error;
        }
    }

export const fetchEpisodes = async (episodeCount: number): Promise<Episode[]> => {
    const requests = [...Array(episodeCount).keys()].map(i => fetch(getEpisodeUrl(1, i + 1)).then(res=> res.json()));
    return Promise.all(requests);
};

export const fetchEpisodeDetails = async (episodeCount: number): Promise<EpisodeDetails[]> => {
    const requests = [...Array(episodeCount).keys()].map(i => fetch(getEpisodeUrl(1, i + 1)).then(res=> res.json()));
    return Promise.all(requests);
};