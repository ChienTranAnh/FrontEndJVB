import {authenticator, urlMovie} from "../types/DefaultValue";
import {ObjGenres, ObjMovieDetail, ObjMovies, ObjReviewer, ObjVideoMovie} from "../types/Obj";

export const fetchSlide = async (): Promise<ObjMovies[]> => {
    const response = await fetch(`${urlMovie}/now_playing?language=en-US&page=1`, authenticator);
    const data = await response.json();

    return data.results;
};

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

export const fetchDetailMovie = async (movieKey: string): Promise<ObjMovieDetail> => {
    const response = await fetch(`${urlMovie}/${movieKey}?language=en-US`, authenticator);
    const data = await response.json();

    return data;
};

export const fetchMovieVideo = async (movieKey: string): Promise<ObjVideoMovie[]> => {
    const response = await fetch(`${urlMovie}/${movieKey}/videos?language=en-US`, authenticator);
    const data = await response.json();

    return data.results;
};

export const fetchReviewer = async (movieKey: string): Promise<ObjReviewer[]> => {
    const response = await fetch(`${urlMovie}/${movieKey}/reviews?language=en-US&page=1`, authenticator);
    const data = await response.json();

    return data.results;
};
