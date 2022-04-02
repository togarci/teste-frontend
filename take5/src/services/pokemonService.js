import axios from 'axios';


export class pokemonService {
    constructor() {}

    getPokemonByGeneration(gen) {
        let url = `generation/${gen}`;
        return axios.get(url).then(response => response.pokemon_species)
    }
}