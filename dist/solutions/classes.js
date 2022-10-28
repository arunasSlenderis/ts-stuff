var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DataStore_movies, _DataStore_songs;
const x = 'o';
const c = { [x]: 'kazkas' };
export class DataStore {
    constructor() {
        _DataStore_movies.set(this, []);
        _DataStore_songs.set(this, []);
    }
    getMovie(movieId) {
        const movie = __classPrivateFieldGet(this, _DataStore_movies, "f").find(({ id }) => id === movieId);
        if (!movie)
            throw new Error('Cannot find movie');
        return movie;
    }
    addMovie(movie) {
        __classPrivateFieldGet(this, _DataStore_movies, "f").push(movie);
        return movie;
    }
    getAllMovies() {
        return __classPrivateFieldGet(this, _DataStore_movies, "f");
    }
    clearMovies() {
        __classPrivateFieldSet(this, _DataStore_movies, [], "f");
        return [];
    }
    getSong(songId) {
        const song = __classPrivateFieldGet(this, _DataStore_songs, "f").find(({ id }) => id === songId);
        if (!song)
            throw new Error('Cannot find song');
        return song;
    }
    addSong(song) {
        __classPrivateFieldGet(this, _DataStore_songs, "f").push(song);
        return song;
    }
    getAllSongs() {
        return __classPrivateFieldGet(this, _DataStore_songs, "f");
    }
    clearSongs() {
        __classPrivateFieldSet(this, _DataStore_songs, [], "f");
    }
}
_DataStore_movies = new WeakMap(), _DataStore_songs = new WeakMap();
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
