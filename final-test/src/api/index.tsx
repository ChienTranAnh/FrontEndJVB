import {authenticator, urlMovie} from "../types/DefaultValue";
import {ObjGenres, ObjMovieDetail, ObjMovies, ObjReviewer, ObjVideoMovie} from "../types/Obj";

export const fetchTopRated = async (): Promise<ObjMovies[]> => {
    const response = await fetch(`${urlMovie}/top_rated?language=en-US&page=1`, authenticator);
    const data = await response.json();

    return data.results;
};

export const fetchGenre = async (): Promise<ObjGenres[]> => {
    const urlGenre = urlMovie.slice(0, urlMovie.indexOf('/movie'));
    const response = await fetch(`${urlGenre}/genre/movie/list?language=en`, authenticator);
    const data = await response.json();

    return data.genres;
};

export const fetchDetailMovie = async (): Promise<ObjMovieDetail> => {
    const response = await fetch(`${urlMovie}/906126?language=en-US`, authenticator);
    const data = await response.json();

    return data;
};

export const fetchMovieVideo = async (): Promise<ObjVideoMovie[]> => {
    const response = await fetch(`${urlMovie}/906126/videos?language=en-US`, authenticator);
    const data = await response.json();

    return data.results;
};

export const fetchReviewer = async (): Promise<ObjReviewer[]> => {
    const response = await fetch(`${urlMovie}/906126/reviews?language=en-US&page=1`, authenticator);
    const data = await response.json();

    return data.results;
};
