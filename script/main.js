"use strict";

// let number = 4.6;
// const person = "Alexandra";
// const bool = true;
// const object = {
//     name: "John",
//     age: 25,
//     famStatus: false
// };
//
// let arr = ["plumb.png", "orange.jpg", 6, "apple.bmp"]
//
// const storeName = "Bonus";
// const storeDescription = {
//     budget: 10000,
//     employees: ["John", "Alex", "Stephen"],
//     products: {
//         apples: 10,
//         oranges: 15
//     },
//     open: true
// };
// const result = confirm("Are you here?");
// const answer = prompt("Are you sure", "yes");
// const answer = [];
//
// answer[0] = prompt("What is your name?", "");
// answer[1] = prompt("What is your surname?", "");
// answer[2] = prompt("What is your age?", "");

const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false

};

const a = prompt("Один из последних просмотреных фильмов?"),
    b = prompt("Оцените его."),
    c = prompt("Один из последних просмотреных фильмов?"),
    d = prompt("Оцените его.")

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);




