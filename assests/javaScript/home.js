const movieList = document.getElementById("movie-list");
const apiKey = "d2aa1d6a7ef9316cd7e2270dd937b843";

fetch(
  `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
)
  .then((res) => res.json())
  .then((data) => showMovies(data.results))
  .catch((error) => alert(`error: ${error}`));

function showMovies(movies) {
  let markUp = "";

  movies.forEach((movie) => {
    markUp = `<li class="movie-box" id="movie-box">
      <a href="./movieDetail.html?${queryParam(movie)}" }>
        <img
          src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          alt="Movie cover image"
          class="movie-box-image"
        />
        <div class="movie-box-overlay">
          <section class="movie-box-detail">
            <h2 class="movie-box-title">${movie.original_title}</h2>
            <span>Release Date:&ensp;</span><span>${movie.release_date}</span>
          </section>
        </div>
      </a>
</li>`;
console.log(movie);

    movieList.innerHTML += markUp;
  });
}

function queryParam(movie) {
  return Object.keys(movie)
    .map((key) => {
      return `${key}=${encodeURIComponent(movie[key])}`;
    })
    .join("&");
}

// file:///home/shamim/code/movie-box/movieDetail.html?adult=false&backdrop_path=%2FrSPw7tgCH9c6NqICZef4kZjFOQ5.jpg&genre_ids=18%2C80&id=238&original_language=en&original_title=The%20Godfather&overview=Spanning%20the%20years%201945%20to%201955%2C%20a%20chronicle%20of%20the%20fictional%20Italian-American%20Corleone%20crime%20family.%20When%20organized%20crime%20family%20patriarch%2C%20Vito%20Corleone%20barely%20survives%20an%20attempt%20on%20his%20life%2C%20his%20youngest%20son%2C%20Michael%20steps%20in%20to%20take%20care%20of%20the%20would-be%20killers%2C%20launching%20a%20campaign%20of%20bloody%20revenge.&popularity=95.057&poster_path=%2F3bhkrj58Vtu7enYsRolD1fZdja1.jpg&release_date=1972-03-14&title=The%20Godfather&video=false&vote_average=8.7&vote_count=16668


// {
//   adult: false,
//   backdrop_path: "/rSPw7tgCH9c6NqICZef4kZjFOQ5.jpg",
//   genre_ids: [18, 80],
//   id: 238,
//   original_language: "en",
//   original_title: "The Godfather",
//   overview: "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.",
//   popularity: 95.057,
//   poster_path: "/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
//   release_date: "1972-03-14",
//   title: "The Godfather",
//   video: false,
//   vote_average: 8.7,
//   vote_count: 16668
// }