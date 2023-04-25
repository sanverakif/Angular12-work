import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      { id: 1, title: 'film 1', description: 'film 1 desc', imgUrl: '1.jpeg' },
      { id: 2, title: 'film 2', description: 'film 2 desc', imgUrl: '2.jpeg' },
      { id: 3, title: 'film 3', description: 'film 3 desc', imgUrl: '3.jpeg' },
      { id: 4, title: 'film 4', description: 'film 4 desc', imgUrl: '4.jpeg' },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  getMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.id == id);
  }
}
