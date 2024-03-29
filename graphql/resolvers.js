import {addMovie, deleteMovie, getById, getMovies} from "./db";

export const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, {id}) => getById(id)
    },
    Mutation: {
        addMovie: (_, {name, score}) => addMovie({name, score}),
        deleteMovie: (_, {id}) => deleteMovie(id)
    }
};
