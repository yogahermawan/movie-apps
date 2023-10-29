import { selector, atom } from 'recoil';
import axios from 'axios';

const Paginate = atom({
    key: 'paginate',
    default: 1,
})

const Genres = atom({
    key: 'genre',
    default: [],
})

const TrendingMovie = selector({
    key: 'trandingMovie',
    default: [],
    get: ({ get }) => {
        let movie = null;
        try {
            let results = axios(`https://api.themoviedb.org/3/trending/all/day?api_key=1a73a1e3de652a34b08d98af2ba25692&page=${get(Paginate)}`)
            movie = results
        } catch (e) {
            movie = e.message
        }
        return movie;
    }
})

const Movie = selector({
    key: 'movie',
    default: [],
    get: ({ get }) => {
        let movie = null;
        try {
            let results = axios.get(`
            https://api.themoviedb.org/3/discover/movie?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${get(Paginate)}&with_genres=${get(Genres)}`)
            movie = results
        } catch (e) {
            movie = e.message
        }
        return movie;
    }
})

const idDetailMovie = atom({
    key: 'idDetail',
    default: ''
})

const DetailMovie = selector({
    key: 'detailMovie',
    default: [],
    get: ({ get }) => {
        let movie = null;
        try {
            let results = axios(`https://api.themoviedb.org/3/movie/${get(idDetailMovie)}?language=en-US`)
            movie = results
        } catch (e) {
            movie = e.message
        }
        return movie;
    }
})

const GenreData = selector({
    key: '',
    get: ({ get }) => {
        let movie = null;
        try {
            let results = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=3d820eab8fd533d2fd7e1514e86292ea&language=en-US`)
            movie = results
        } catch (e) {
            movie = e.message
        }
        return movie;
    }
})

export { TrendingMovie, Paginate, DetailMovie, Movie, GenreData, Genres }