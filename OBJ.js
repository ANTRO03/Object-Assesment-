const img = document.createElement('img');

const ol = document.querySelector('ol')

const body = document.querySelector('body');





const movieInfo = [
    {
    name:"Star Wars Revenge Of The Sith",
    year: 2005,
    director: "George Lucas",
    Poster: "https://m.media-amazon.com/images/M/MV5BNTc4MTc3NTQ5OF5BMl5BanBnXkFtZTcwOTg0NjI4NA@@._V1_.jpg",
    },
    {
    name:"John Wick",
    year:2014,
    director:"Chad Stahelski",
    Poster: "https://m.media-amazon.com/images/M/MV5BMTU2NjA1ODgzMF5BMl5BanBnXkFtZTgwMTM2MTI4MjE@._V1_.jpg",

    },

    {
    name: "The Menu",
    year: 2022,
    director: "Mark Mylod",
    Poster: "https://lumiere-a.akamaihd.net/v1/images/p_themenu_97_v2_029ea820.jpeg?region=0,0,540,810",
    }
];  
const li = `
    <li>
    <p> Name: ${movieInfo[0].name}</p>
    <p> Year: ${movieInfo[0].year}</p>
    <p> Director: ${movieInfo[0].director}</p>
    <p> ${movieInfo[0].Poster}</p>
    </li>

`
const template = movieInfo.map(movie => `
<li>
    <p> Name: ${movie.name}</p>
    <p> Year: ${movie.year}</p>
    <p> Director: ${movie.director}</p>
    <p> <img src="${movie.Poster}"> </p>
</li>


`);

ol.innerHTML = template.join('');
body.appendChild(img);