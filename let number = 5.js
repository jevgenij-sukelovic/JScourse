"use strict";



const personalMoviesDB = {
    count: 0,
    movies: {},
    actors: {},
    geners: [],
    privat: false,
    start: function (){

      personalMoviesDB.count = +prompt('how mutch films are you watshed?','');
    
        while(personalMoviesDB.count == '' || personalMoviesDB.count == null ||
         isNaN(personalMoviesDB.count)){
        personalMoviesDB.count = +prompt('how mutch films are you watshed?','');
        }
        return console.log(this.count);
    },
     myWatchedMovies: function(){
        if(personalMoviesDB.count<10){
            console.log('You watshed not many movies');
        }else if(personalMoviesDB.count>=10 || personalMoviesDB<=30){
        console.log('You are classic wiver');
        }else if(personalMoviesDB.count >30){
            console.log('you are movie-man');
        }else{
            console.log('error');
        }
    
    },
    moviesRate: function (){

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
    
    },
    showMyDB: function (hidden){

        if  (!hidden){
            console.log(personalMoviesDB);
        }
    
    },
     writeYourGeners: function(){

        for(let i = 1; i<=3; i++){
    
    
            personalMoviesDB.geners[i-1]=prompt
             (`Your liked gener by number ${i}`);
             while (personalMoviesDB.geners== '' || 
             personalMoviesDB.geners == null){
                personalMoviesDB.geners [i-1]=prompt
                (`Your liked gener by number ${i}`);
             }

           
        }
        personalMoviesDB.geners.forEach((item, i) => {
            console.log(`Your liked gener ${i+1} is ${item}`)
        });
    
    },
    toggleVisibleMyDB: function(){
        if(personalMoviesDB.privat){
            personalMoviesDB.privat = false;

        }else{
            personalMoviesDB.privat = true;
        }
    }


};

// personalMoviesDB.start();
// personalMoviesDB.toggleVisibleMyDB(personalMoviesDB.privat);
// personalMoviesDB.showMyDB(personalMoviesDB.privat);
// personalMoviesDB.writeYourGeners();


