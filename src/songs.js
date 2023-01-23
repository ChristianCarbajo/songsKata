import  songs  from "./data.js";
// const songs = require('./data');
console.info(songs[0].artist)
//Exercise 1: Get the array of all Artists.
function getAllArtists(array){
    let result = array.map(x=>x.artist)
    //console.log("Exercise 1 ->", result);
    return result;
};
// console.info(getAllArtists(songs))
//Exercise 2: Get the songs of a certain artist
function getSongsFromArtist(array, artist){

    let result = array.filter(x=> x.artist == artist)
    return (result)
};

//Exercise 3: Alphabetic order by title
function orderAlphabetically(array){
   let result = (array.map(x=>x.title)).sort().slice (0, 10)
   return result
};
// console.info(orderAlphabetically(songs))
//Exercise 4: Order by year, ascending
function orderByYear(array){
    const arrays = [...array]
    const result = (arrays.sort((a, b)=> a.title < b.title ? -1 : 1).sort((a, b)=> a.year < b.year ? -1 : 1))
    return result
   
};
// console.log(orderByYear(songs))
//Exercise 5: Filter songs by genre
function songsByGenre(array,genre) {

    let result = array.filter(x=> x.genre[0] == genre || x.genre[1] == genre ||x.genre[2] == genre ||x.genre[3] == genre ||x.genre[4] == genre)
    return result
};
console.log(songsByGenre(songs,"Folk"))
//Exercise 6: Modify the duration of songs to seconds

function minutsToSeconds(array) {
    let duracion = array.map(x=> x.duration)
    let split = duracion[0].split(" ")
    let min = Number(split[0].match(/\d+/g));
    let sec = Number(split [1].match(/\d+/g));
    let result = [(min*60) + sec];
    return result
};
console.info(minutsToSeconds(songs[0].duration))
//Exercise 7: Get the longest song
function getLongestSong(){
    //Write your code here
};

//Exercise 8: Get the shortest song
//Write the getShortestSong() function




if(typeof module !== 'undefined') {
    module.exports = {
        getAllArtists,
        getSongsFromArtist,
        orderAlphabetically,
        orderByYear,
        songsByGenre,
        minutsToSeconds,
        getLongestSong
    };
};
