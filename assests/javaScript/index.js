const movieList = document.getElementById("movie-list");
let markUp = "";

fetch(
  `https://api.themoviedb.org/3/movie/top_rated?api_key=d2aa1d6a7ef9316cd7e2270dd937b843&language=en-US&page=1`
)
  .then((res) => res.json())
  .then((data) => showMovies(data.results))
  .catch((error) => console.log(`error: ${error}`));

function showMovies(movies) {
  movies.forEach((movie) => {
    markUp = `<li class="movie-box" id="movie-box">
    <a href="./movieDetail.html">
      <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="Movie cover image"
        class="movie-box-image"
      >
      <div class="movie-box-overlay">
        <section class="movie-box-detail">
          <h2 class="movie-box-title">${movie.original_title}</h2>
          <span>Release Date:&ensp;</span><span>${movie.release_date}</span>
        </section>
      </div>
    </a>
  </li>`;

    movieList.innerHTML += markUp;
  });
}
