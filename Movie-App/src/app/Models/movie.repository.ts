import { Movie } from './movie';

export class MovieRepository {
  private movies: Movie[];
  constructor() {
    this.movies = [
      {
        id: 1,
        title: 'film 1',
        description:
          'Lorem,',
        imgUrl: '2.jpeg',
        isPopuler: true,
        datePublish: new Date(2023, 5, 4),
      },
      {
        id: 2,
        title: 'film 2',
        description:
          'Lorem, ipsum',
        imgUrl: '2.jpeg',
        isPopuler: false,
        datePublish: new Date(2023, 5, 4),
      },
      {
        id: 3,
        title: 'film 3',
        description:
          'Lorem, ipsum dolor',
        imgUrl: '3.jpeg',
        isPopuler: false,
        datePublish: new Date(2023, 5, 4),
      },
      {
        id: 4,
        title: 'film 4',
        description:
          'Lorem, ipsum dolor sit',
        imgUrl: '4.jpeg',
        isPopuler: true,
        datePublish: new Date(2023, 5, 4),
      },
      {
        id: 4,
        title: 'film 4',
        description:
          'Lorem, ipsum dolor sit amet',
        imgUrl: '4.jpeg',
        isPopuler: true,
        datePublish: new Date(2023, 5, 4),
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
