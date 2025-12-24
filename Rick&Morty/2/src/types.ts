export interface Episode {
    Episode: string;
    Title: string;
    Poster: string;
    imdbRating: string;
    Plot: string;
}

export interface EpisodeDetails {
    Episode: string;
    Title: string;
    Poster: string;
    Runtime: string;
    Genre: string;
    Plot: string;
}

export interface Character {
    id: number;
    name: string;
    year: string;
    species: string;
    status: string;
    image: string;
}