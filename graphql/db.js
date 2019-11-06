export let movies = [
    {
        id: 0,
        name: "kth0",
        score: 8
    },
    {
        id: 1,
        name: "kth1",
        score: 4
    }
    ,
    {
        id: 2,
        name: "kth2",
        score: 100
    },
    {
        id: 3,
        name: "kth3",
        score: 98
    },
    {
        id: 4,
        name: "kth4",
        score: 81
    }];

export const getMovies = () => movies;
export const getById = id => movies.filter(movie => id === movie.id)[0];
export const deleteMovie = id => {
  const cleaned = movies.filter(movie => movie.id !== id);
  if (movies.length > cleaned.length) {
      movies = cleaned;
      return true;
  } else {
      return false;
  }
};

export const addMovie = ({name, score}) => {
    const newMovie = {
        id: movies.length + 1,
        name,
        score
    };
    movies.push(newMovie);
    return newMovie;
};