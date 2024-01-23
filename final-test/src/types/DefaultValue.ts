/* urlMovie */
export const urlMovie = 'https://api.themoviedb.org/3/movie';

/* urlPoster */
export const urlPoster = 'https://image.tmdb.org/t/p/w500';
/* urlSlider */
export const urlSlider = 'https://image.tmdb.org/t/p/original';

/* urlImages */
export const urlImages = '/images';

/* authenticator */
export const authenticator = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODVmMTYxMjk4ZTYzNTczMGUyMjU3OWNjNjg3ZTllOCIsInN1YiI6IjY1ODUzZWUxMjhkN2ZlNTg2NTM5ZjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewya4XoONHsOWkwE_LJ-ieitzIj569OfKDL0-Q8_CXg'
    }
};

/* defaultMovie */
export const defaultMovie = {
    adult: true,
    backdrop_path: `${urlImages}/noimage.jpg`,
    id: 0,
    title: 'Title movie',
    original_language: 'EN',
    original_title: 'Original title movie',
    overview: '',
    poster_path: `${urlImages}/noimage.jpg`,
    media_type: '',
    genre_ids: [9,9,9,1],
    popularity: 0,
    release_date: '',
    video: false,
    vote_average: 0,
    vote_count: 0
};

/**
 * defaultVideoMovie
 */
export const defaultVideoMovie = {
    iso_639_1: "en",
    iso_3166_1: "US",
    name: "J.A. Bayona and Tom Holland on Society of the Snow",
    key: "O_E2Pdh190A",
    site: "YouTube",
    size: 1080,
    type: "Behind the Scenes",
    official: true,
    published_at: "2024-01-16T17:58:59.000Z",
    id: "65a7a43c11386c012a693039"
};

/**
 * defaultReviewer
 */
export const defaultReviewer = {
    author: "Katherine Pierce",
    author_details: {
            name: "Katherine Pierce Mikaelson",
            username: "msbArlene",
            avatar_path: `${urlImages}/Ellipse11.png`,
            rating: 8
        },
    content: "Vampire Diaries Series",
    created_at: "2023-12-30T16:43:12.164Z",
    id: "659048a0e004a66cec172ff7",
    updated_at: "2023-12-30T16:43:12.255Z",
    url: "https://www.themoviedb.org/review/659048a0e004a66cec172ff7"
};

/**
 * defaultMovieDetail
 */
export const defaultMovieDetail = {
    adult: false,
    backdrop_path: "/md848EEPm3dHZOqwGxxTVwH2vu5.jpg",
    belongs_to_collection: '',
    budget: 65500000,
    genres: [
        {
            id: 18,
            name: "Drama"
        },
        {
            id: 36,
            name: "History"
        }
    ],
    homepage: "https://www.netflix.com/title/81268316",
    id: 0,
    imdb_id: "tt16277242",
    original_language: "es",
    original_title: "La sociedad de la nieve",
    overview: "On October 13, 1972, Uruguayan Air Force Flight 571, chartered to take a rugby team to Chile, crashes into a glacier in the heart of the Andes.",
    popularity: 1353.286,
    poster_path: `${urlImages}/noimage.jpg`,
    production_companies: [
        {
            id: 207052,
            logo_path: '',
            name: "El Arriero Films",
            origin_country: "ES"
        },
        {
            id: 217668,
            logo_path: '',
            name: "Misión de Audaces Films",
            origin_country: "ES"
        },
        {
            id: 178464,
            logo_path: "/tyHnxjQJLH6h4iDQKhN5iqebWmX.png",
            name: "Netflix",
            origin_country: "US"
        }
    ],
    production_countries: [
        {
            iso_3166_1: "ES",
            name: "Spain"
        },
        {
            iso_3166_1: "US",
            name: "United States of America"
        }
    ],
    release_date: "2023-12-13",
    revenue: 0,
    runtime: 144,
    spoken_languages: [
        {
            english_name: "Spanish",
            iso_639_1: "es",
            name: "Español"
        }
    ],
    status: "Released",
    tagline: "Based on a remarkable true story.",
    title: "Society of the Snow",
    video: false,
    vote_average: 8.054,
    vote_count: 933
};
