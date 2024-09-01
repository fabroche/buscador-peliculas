import React from 'react';
import './MovieItem.css'

function MovieItem({movie, loading}) {
    console.log(movie)
    return (
        <li className="movie">
            <h3 className={`${loading ? 'movie--loading' : ''}`}>{loading ? 'loading...' : movie?.title}</h3>
            <p className={`${loading ? 'movie--loading' : ''}`}>{loading ? 'loading...' : movie?.year}</p>
            {movie?.poster === 'N/A'
                ? <span className={`error-poster ${loading ? 'movie--loading' : ''}`}>{movie?.title}</span>
                : <img
                    className={`${loading ? 'movie--loading' : ''}`}
                    src={movie?.poster}
                    alt={movie?.title}
                />
            }
        </li>
    );
}

export default MovieItem;