import { useEffect, useState } from "react";
import { Movie } from "../types/movie";

function movieList() {
  const [movieData, setMovieData] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const rsp = await fetch("https://localhost:4000/movie");
      const temp = await rsp.json();
      setMovieData(temp);
    };
    fetchMovies();
  }, []);

  return (
    <>
      <div className="row">
        <h1>Movie Collection</h1>
        <h3>Check Out All My Movies!</h3>
      </div>
      <table className="table table-striped table-bordered">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>Director</th>
            <th>Rating</th>
            <th>Category</th>
            <th>Edited</th>
            <th>Lent To</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {movieData.map((movie) => (
            <tr key={movie.movieId}>
              <td>{movie.title}</td>
              <td>{movie.year}</td>
              <td>{movie.director}</td>
              <td>{movie.rating}</td>
              <td>{movie.category}</td>
              <td>{movie.edited}</td>
              <td>{movie.lentTo}</td>
              <td>{movie.notes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default movieList;
