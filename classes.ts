export interface DataEntity {
  id: string;
}
export interface Movie extends DataEntity {
  director: string;
}
export interface Song extends DataEntity {
  singer: string;
}

export interface DataEntityMap {
  movie: Movie;
  song: Song;
  // comic: Comic
}

type DataStoreMethods = {
  [Key in keyof DataEntityMap as `clear${Capitalize<Key>}s`]: () => void
} & {
  [Key in keyof DataEntityMap as `add${Capitalize<Key>}`]: (id: string) => DataEntityMap[Key]
};

export class DataStore implements DataStoreMethods {
  #movies: Movie[] = [];
  #songs: Song[] = [];

  clearMovies() {
    this.#movies = [];
    return [];
  }

  clearSongs() {
    this.#songs = [];
  }
  
  addMovie(movie: Movie) {
    this.#movies.push(movie);
    return movie;
  }

  addSong(song: Song) {
    this.#songs.push(song);
    return song;
  }
}

// ts should prevent us from adding different method names and implementations. Also if we have another object, like comic, ts should tell us what methods are missing
const ds = new DataStore();
ds.addSong({ id: 'song-123', singer: 'The Flaming Lips' });
ds.addMovie({
  id: 'movie-456',
  director: 'Stephen Spielberg',
});
ds.getSong('song-123'); // returns the song
ds.getMovie('movie-456'); // returns the movie
ds.getAllSongs(); // array of all songs
ds.getAllMovies(); // array of all movies
ds.clearSongs(); // clears all songs
ds.clearMovies(); // clears all movies









































#movies: Movie[] = [];
  #songs: Song[] = [];

  getMovie(movieId: string) {
    const movie = this.#movies.find(({ id }) => id === movieId);
    if (!movie) throw new Error('Cannot find movie');
    return movie;
  }

  addMovie(movie: Movie) {
    this.#movies.push(movie);
    return movie;
  }

  getAllMovies() {
    return this.#movies;
  }

  clearMovies() {
    this.#movies = [];
    return [];
  }

  getSong(songId: string) {
    const song = this.#songs.find(({ id }) => id === songId);
    if (!song) throw new Error('Cannot find song');
    return song;
  }

  addSong(song: Song) {
    this.#songs.push(song);
    return song;
  }

  getAllSongs() {
    return this.#songs;
  }

  clearSongs() {
    this.#songs = [];
  }


