import React from 'react';
import './App.css';
import MovieThumbnails from './MovieThumbnails';
import MovieDetails from './MovieDetails';

class App extends React.Component
{
  constructor(props)
  {
    super(props);

    this.state = {
      movies: [],
      clickedMovieId: 0
    }

    this.loadMovies = this.loadMovies.bind(this);
    this.setId = this.setId.bind(this);
  }

  componentDidMount()
  {
    this.loadMovies();
  }

  loadMovies()
  {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=b6fbc7f3f313bd395902af464ef47262&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
    .then(response => {
      return response.json();
    })
    .then(jsonData => {
        this.setState({movies: jsonData.results})
    });  
  }

  setId(e, id)
  {
    this.setState({clickedMovieId: id})
  };

  render() {

    return (
      
      <div className="BodyContainer">
          <MovieThumbnails moviesarray={this.state.movies} whenClicked={this.setId}/>
          <MovieDetails moviesarray={this.state.movies} movieId={this.state.clickedMovieId} />
      </div>
    );
  }
}
export default App;
