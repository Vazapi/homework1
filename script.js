const numberOfFilms = +prompt('Сколько фильмов уже посмотрели?', '0!');



const personalMovieDB = {
    count: numberOfFilms,
    movies: {
        
    },
    actors: {},
    genres: [],
    privat: false,
};


const firstQueston = prompt('Один из последних просмотренных фильмов?', 'logan');
    const secondQueston = prompt('На сколько его оцените?', '10 баллов');

    personalMovieDB.movies[firstQueston] = secondQueston;


// console.log(Object.keys(personalMovieDB.movies).length < 3);
// while ((Object.keys(personalMovieDB.movies).length) < 3) {
//     const firstQueston = prompt('Один из последних просмотренных фильмов?', 'logan');
//     const secondQueston = prompt('На сколько его оцените?', '10 баллов');

//     personalMovieDB.movies[firstQueston] = secondQueston;
// }

// console.log(personalMovieDB.movies);

// for (let i = 0; (Object.keys(personalMovieDB.movies).length) <= 2; i++ ) {

//     const firstQueston = prompt('Один из последних просмотренных фильмов?', 'logan');
//     const secondQueston = prompt('На сколько его оцените?', '10 баллов');

//     personalMovieDB.movies[firstQueston] = secondQueston;

//     console.log(personalMovieDB.movies);
// }