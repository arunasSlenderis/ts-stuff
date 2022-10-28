var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DataStore_movies, _DataStore_songs;
export class DataStore {
    constructor() {
        _DataStore_movies.set(this, []);
        _DataStore_songs.set(this, []);
    }
    clearMovies() {
        __classPrivateFieldSet(this, _DataStore_movies, [], "f");
        return [];
    }
    clearSongs() {
        __classPrivateFieldSet(this, _DataStore_songs, [], "f");
    }
    addMovie(movie) {
        __classPrivateFieldGet(this, _DataStore_movies, "f").push(movie);
        return movie;
    }
    addSong(song) {
        __classPrivateFieldGet(this, _DataStore_songs, "f").push(song);
        return song;
    }
}
_DataStore_movies = new WeakMap(), _DataStore_songs = new WeakMap();
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
#movies;
Movie[] = [];
#songs;
Song[] = [];
getMovie(movieId, string);
{
    const movie = this..find(({ id }) => id === movieId);
    if (!movie)
        throw new Error('Cannot find movie');
    return movie;
}
addMovie(movie, Movie);
{
    this..push(movie);
    return movie;
}
getAllMovies();
{
    return this.;
}
clearMovies();
{
    this. = [];
    return [];
}
getSong(songId, string);
{
    const song = this..find(({ id }) => id === songId);
    if (!song)
        throw new Error('Cannot find song');
    return song;
}
addSong(song, Song);
{
    this..push(song);
    return song;
}
getAllSongs();
{
    return this.;
}
clearSongs();
{
    this. = [];
}
