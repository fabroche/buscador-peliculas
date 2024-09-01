import React from 'react';
import './MovieList.css'

function MovieList(props) {
    const renderFunc = props.children
    const hasMovies = props.movies?.length > 0

    return (
        <ul className="movie-list">
            {props.loading && props.onLoading()}
            {!hasMovies && !props.loading && props.onEmptyMovies()}
            {props.movies?.map(renderFunc)}
        </ul>
    );
}

export default MovieList;