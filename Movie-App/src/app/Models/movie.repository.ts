import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'film 1',
        description: 'film 1 desc',
        imgUrl: '2.jpeg',
        isPopuler: true,
      },
      {
        id: 2,
        title: 'film 2',
        description: 'film 2 desc',
        imgUrl: '2.jpeg',
        isPopuler: false,
      },
      {
        id: 3,
        title: 'film 3',
        description: 'film 3 desc',
        imgUrl: '3.jpeg',
        isPopuler: false,
      },
      {
        id: 4,
        title: 'film 4',
        description: 'film 4 desc',
        imgUrl: '4.jpeg',
        isPopuler: true,
      },
      {
        id: 4,
        title: 'film 4',
        description: 'film 4 desc',
        imgUrl: '4.jpeg',
        isPopuler: true,
      },
    ];
  }

  getMovies(): Movie[] {
    return this.movies;
  }
  getPopulerMovies(): Movie[] {
    return this.movies.filter((i) => i.isPopuler);
  }
  getMovieById(id: number): Movie | undefined {
    return this.movies.find((i) => i.id == id);
  }
}
