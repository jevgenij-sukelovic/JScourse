"use strict";

let numberOfFilms;

function start (){

    numberOfFilms = +prompt('how mutch films are you watshed?','');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('how mutch films are you watshed?','');
    }
}
// start();


const personalMoviesDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    geners: [],
    privat: false
};

function myWatchedMovies(){
    if(personalMoviesDB.count<10){
        console.log('You watshed not many movies');
    }else if(personalMoviesDB.count>=10 || personalMoviesDB<=30){
    console.log('You are classic wiver');
    }else if(personalMoviesDB.count >30){
        console.log('you are movie-man');
    }else{
        console.log('error');
    }

}
// myWatchedMovies();


function moviesRate(){

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

}
// moviesRate();

 


// const a = prompt('what is the last film you watshed','rembo'),
//        b = prompt('what is the films reting','9'),
//        c = prompt('what is the last film you watshed', 'rpobocop'),
//        d = prompt('what is the films reting', '7');

// personalMoviesDB.movies[a]=b;
// personalMoviesDB.movies[c]=d;





function showMyDB(hidden){

    if  (!hidden){
        console.log(personalMoviesDB);
    }

}
// showMyDB(personalMoviesDB.privat);

function writeYourGeners(){

    for(let i = 1; i<=3; i++){

       

        let gener = prompt (`Your liked gener by number ${i}`,'');

        personalMoviesDB.geners[i-1]=gener;
       
    }

}


writeYourGeners();
console.log(personalMoviesDB.geners);