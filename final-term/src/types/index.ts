export type Movies = {
    adult: boolean
    backdrop_path: string
    id?: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: Genres[]
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

export const movieDefault = {
    adult: true,
    backdrop_path: `${urlImages}/default.png`,
    // id: 4,
    title: 'Black Night',
    original_language: 'EN',
    original_title: '',
    overview: '',
    poster_path: '',
    media_type: '',
    genre_ids: [
        {id: 1, name: "HD"},
        {id: 2, name: "Session 1"}
    ],
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
}
