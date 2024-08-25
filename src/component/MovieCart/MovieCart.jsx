/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './MovieCart.css';


export default function MovieCart({ movie }) {
  return (
    <div className="item col-md-4 p-3">
      <div className="movie-card card mb-4">
        <img
          src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          className="card-img-top"
          alt={movie?.original_title}
        />
        <div className="card-body">
          <h5 className="card-title">{movie?.title}</h5>
          <p className="card-text text-muted">Release Date: {movie?.release_date}</p>
          <p className="card-text">
            Rating: <span className="badge bg-success">{movie?.vote_average}</span> ({movie?.vote_count} votes)
          </p>
          <div className="d-flex align-items-center justify-content-between">
            <Link to={'movie/' + movie.id} className="btn btn-primary">View Details</Link>
            <i
              className={`fa-solid fa-heart fs-3 `}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
}
