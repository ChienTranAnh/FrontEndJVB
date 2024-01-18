/**
 * interface ObjMovies
 */
export interface ObjMovies {
    adult: boolean
    backdrop_path: string
    id: number
    title: string
    original_language: string
    original_title: string
    overview: string
    poster_path: string
    media_type: string
    genre_ids: number[]
    popularity: number
    release_date: string
    video: boolean
    vote_average: number
    vote_count: number
};

/* type ObjGenres */
export interface ObjGenres {
    id: number
    name: string
};

/**
 * interface ObjReviewer
 */
export interface ObjReviewer {
    author: string,
    author_details: ObjAuthor,
    content: string,
    created_at: string,
    id: string,
    updated_at: string,
    url: string
};

/* type ObjAuthor */
export interface ObjAuthor {
    name: string,
    username: string,
    avatar_path: string,
    rating: number
};

/**
 * interface ObjVideoMovie
 */
export interface ObjVideoMovie {
    iso_639_1: string,
    iso_3166_1: string,
    name: string,
    key: string,
    site: string,
    size: number,
    type: string,
    official: boolean,
    published_at: string,
    id: string
};

/**
 * interface ObjMovieDetail
 */
export interface ObjMovieDetail {
    adult: boolean,
    backdrop_path: string,
    belongs_to_collection: string,
    budget: number,
    genres: ObjGenres[],
    homepage: string,
    id: number,
    imdb_id: string,
    original_language: string,
    original_title: string,
    overview: string,
    popularity: number,
    poster_path: string,
    production_companies: ObjProductionCompanies[],
    production_countries: ObjProductionCountries[],
    release_date: string,
    revenue: number,
    runtime: number,
    spoken_languages: ObjSpokenLanguages[],
    status: string,
    tagline: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
};

/* type ObjProductionCompanies */
export interface ObjProductionCompanies {
    id: number,
    logo_path: string,
    name: string,
    origin_country: string
};

/* type production_companies */
export interface ObjProductionCountries {
    iso_3166_1: string,
    name: string
};

/* type ObjSpokenLanguages */
export interface ObjSpokenLanguages {
    english_name: string,
    iso_639_1: string,
    name: string
};
