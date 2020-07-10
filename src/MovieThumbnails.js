import React from 'react';
import './App.css';

class MovieThumbnails extends React.Component
{
    constructor(props) {
        super(props);


        this.makeMovieThumbnail = this.makeMovieThumbnail.bind(this);
    }


    makeMovieThumbnail (movie) {
      const moviePath = "https://image.tmdb.org/t/p/original/" + movie.poster_path;
      const movieId = movie.id;
      return (
      <div>
        <img src={moviePath} className="thumbnail" onClick={(e) => this.props.whenClicked(e, movieId)} />
      </div>
      );
    }

    render() {
        let displayMovies = [];
        displayMovies = this.props.moviesarray.map(this.makeMovieThumbnail);

        return(
            <div className="ThumbnailsContainer">
                {displayMovies}
            </div>
            
        );
    };
}
export default MovieThumbnails;