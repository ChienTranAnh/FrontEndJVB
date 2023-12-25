export const fetchUpcomingMovies = () => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhODVmMTYxMjk4ZTYzNTczMGUyMjU3OWNjNjg3ZTllOCIsInN1YiI6IjY1ODUzZWUxMjhkN2ZlNTg2NTM5ZjJlYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ewya4XoONHsOWkwE_LJ-ieitzIj569OfKDL0-Q8_CXg'
        }
    };

    return fetch('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', options)
        .then(response => response.json())
        .catch(err => {
            console.error(err);
            throw err;
        });
};
