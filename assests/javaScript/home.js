const movieList = document.getElementById("movie-list");
const apiKey = "d2aa1d6a7ef9316cd7e2270dd937b843";

async function fetchMovieList() {
  try {
    const fetchedData = await fetch(
      `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`
    );

    const movieList = await fetchedData.json();

    showMovies(movieList.results);
  } catch (erorr) {
    showErrorMessage();
  }
}

fetchMovieList();

function showMovies(movies) {
  let markUp = "";

  movies.forEach((movie) => {
    markUp = `<li class="movie-box" id="movie-box">
      <a href="./movieDetail.html?${movie.id}" }>
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

    movieList.innerHTML += markUp;
  });
}

function showErrorMessage() {
  let markUp = "";

  markUp = `<p class="error-message">Somthing went wrong.Please,refresh the page.</p>`;
  movieList.innerHTML = markUp;
}
