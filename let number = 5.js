"use strict";

let numberOfFilms = +prompt('how mutch films are you watshed?','');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
console.log(personalMoviesDB.actors);


const a = prompt('what film are you watshig in last time',''),
       b = prompt('what rate is for this film',''),
       c = prompt('what film are you watshig in last time', ''),
       d = prompt('what rate is for this film', '');

personalMoviesDB.movies[a]=b;
personalMoviesDB.movies[c]=d;

console.log(personalMoviesDB);
