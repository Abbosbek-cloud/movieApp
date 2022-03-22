import Movie from "./Movie";
import Page404 from "./Page404";

export default function Movies(props) {
  const { movies = [] } = props;

  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <Page404 />
      )}
    </div>
  );
}
