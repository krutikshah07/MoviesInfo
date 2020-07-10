import {SEARCH_MOVIE ,FETCH_MOVIE ,FETCH_MOVIES, LOADING } from './actionsType';
import axios from 'axios'

export  const  searchMovie = text => dispatch=> {
    dispatch({
        type: SEARCH_MOVIE,
        payload: text
    });    
};


export const fetchMovie = text => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=304faecc&s=${text}`)
        .then(response => dispatch({
            type:FETCH_MOVIE,
            payload: response.data
        }))
        .catch(err => console.log(err))
};

export const fetchMovies = id => dispatch =>{
    axios.get(`http://www.omdbapi.com/?apikey=304faecc&i=${id}`)
        .then(response => dispatch({
            type:FETCH_MOVIES,
            payload: response.data
        }))
        .catch(err => console.log(err))
};


export const setLoading = ()=>{
    return{
        type: LOADING
    };
};