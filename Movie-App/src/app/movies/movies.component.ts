import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieRepository } from '../Models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  title = 'film list';
  movies: Movie[];
  populerMovies: Movie[];
  movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
    this.populerMovies = this.movieRepository.getPopulerMovies();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
