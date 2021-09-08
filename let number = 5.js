"use strict";

let numberOfFilms = +prompt('how mutch films are you watshed?','');

const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};
if(personalMoviesDB.count<10){
    console.log('You watshed not many movies');
}else if(personalMoviesDB.count>=10 || personalMoviesDB<=30){
console.log('You are classic wiver');
}else if(personalMoviesDB.count >30){
    console.log('you are movie-man');
}else{
    console.log('error');
}


 for(let i = 0; i<2; i++)
 {
    let a = prompt('what is the last film you watshed','');
    let b = prompt('what is the films reting','');

    if(a != null && b!=null && a != '' && a.length < 50 &&  b != '' ){
        personalMoviesDB.movies[a]=b;
    }else{
        i--;
    }


 }


// const a = prompt('what is the last film you watshed','rembo'),
//        b = prompt('what is the films reting','9'),
//        c = prompt('what is the last film you watshed', 'rpobocop'),
//        d = prompt('what is the films reting', '7');

// personalMoviesDB.movies[a]=b;
// personalMoviesDB.movies[c]=d;



console.log(personalMoviesDB);
