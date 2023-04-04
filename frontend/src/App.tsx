import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
//import data from "./MovieData.json";
import movieList from "../src/movies/movieList";

class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Joel Hilton Movie Collection</h1>
        <h3>The site for all things about Joel's movie collection!</h3>
        <img src="./JoelHiltonHeadshot.jpg" alt="Joel Hilton Headshot" />
      </div>
    );
  }
}

class Podcast extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Baconsale</h1>
        <h3>Check Out My Podcast!</h3>
        <a href="https://baconsale.com/" target="_blank" rel="noreferrer">
          Baconsale Website
        </a>
      </div>
    );
  }
}

//const MovieData = data.MovieData;

// function MovieList() {
//   return (
//     <div className="App centered">
//       <h1>Movie Collection</h1>
//       <h3>Check Out All My Movies!</h3>
//       <table className="table table-striped table-bordered">
//         <thead>
//           <tr>
//             <th>Title</th>
//             <th>Year</th>
//             <th>Director</th>
//             <th>Rating</th>
//             <th>Category</th>
//             <th>Edited</th>
//           </tr>
//         </thead>
//         <tbody>
//           {MovieData.map((movie) => (
//             <tr>
//               <td>{movie.Title}</td>
//               <td>{movie.Year}</td>
//               <td>{movie.Director}</td>
//               <td>{movie.Rating}</td>
//               <td>{movie.Category}</td>
//               <td>{movie.Edited}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <Router>
        <ul className="list-unstyled navbar bg-light">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/podcast">My Podcast</Link>
          </li>
          <li>
            <Link to="/movies">Movie Collection</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/podcast" Component={Podcast} />
          <Route path="/movies" Component={movieList} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
