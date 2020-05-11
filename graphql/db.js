let movies = [
    {
        id:"0",
        name:"Star Wars - The new one",
        score:1
    },
    {
        id:"1",
        name:"Avengers - Infinity war",
        score:5
    },
    {
        id:"2",
        name:"Harry poter - Magic stone",
        score:99
    },
    {
        id:"4",
        name:"Iron man 3",
        score:2
    },
    
];
export const getMovies = () => movies;

export const getById = id =>{
    const filteredMovie = movies.filter(movie => movie.id === String(id) );
    return filteredMovie[0];
};

export const deleteMovie = (id) => {
    const cleanedMovies = movies.filter(movie => movie.id !==String(id));
    if(movies.length > cleanedMovies.length){
        movies = cleanedMovies;
        return true;
    }else{
        return false;
    }
}

export const addMovie = (name,score) =>{
    const newMovie ={
        id:`${movies.length+ 1}`,
        name,
        score,
    };
    movies.push(newMovie);
    return newMovie;
}