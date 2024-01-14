export type Movies = {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: []
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
};

export type Genres = {
    id: number
    name: string
};

export const urlImages = './images';
