const movieSection = document.getElementById("movie-detail");

const urlSearchParams = new URLSearchParams(window.location.search);
const movie_id = Object.fromEntries(urlSearchParams.entries()).id;

const apiKey = "d2aa1d6a7ef9316cd7e2270dd937b843";

async function fetchMovieDetails() {
  try {
    const fetchedData = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}?api_key=${apiKey}&language=en-US`
    );

    const movieDtails = await fetchedData.json();

    showMovieDetail(movieDtails);
  } catch {
    showErrorMessage();
  }
}

fetchMovieDetails();

function showMovieDetail(movie) {
  movieSection.innerHTML = `
  <figure class="main-container" >
    <img
        src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
        alt="luca animation cover image"
        class="cover-image"
    />
    <figcaption class="detail-text">
      <section class="detail-text-header">
        <h2 class="movie-title">${movie.original_title}</h2>
        <p class="movie-rate">${movie.vote_average}/10</p>
      </section>
      <summary class="movie-description">${movie.overview}</summary
      >
    </figcaption>
  </figure>`;

  document.body.style.backgroundImage = `linear-gradient(to bottom, var(--noColor), var(--darkColor)), url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`;
}

function showErrorMessage() {
  movieSection.innerHTML = `<p class="error-message">Somthing went wrong.Please,refresh the page.</p>`;
}
