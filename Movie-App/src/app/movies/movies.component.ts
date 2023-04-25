import { Component, OnInit } from '@angular/core';
import { Movie } from '../Models/movie';
import { MovieRepository } from '../Models/movie.repository';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css'],
})
export class MoviesComponent implements OnInit {
  movies: Movie[];
  movieRepository: MovieRepository;

  constructor() {
    this.movieRepository = new MovieRepository();
    this.movies = this.movieRepository.getMovies();
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
