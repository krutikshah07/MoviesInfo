import {SEARCH_MOVIE, FETCH_MOVIE ,FETCH_MOVIES, LOADING} from '../redux/actionsType'


const initialStates ={
    text : '',
    movies: [],
    loading: false,
    movie: []
}

export default function(state= initialStates, actions) {
    switch (actions.type){
        case SEARCH_MOVIE:
            return {
                ...state,
                text: actions.payload,
                loading:false,

            }

        case FETCH_MOVIE:
                return {
                    ...state,
                    movies: actions.payload,
                    loading:false
                    
                }
        case FETCH_MOVIES:
                    return {
                        ...state,
                        movie: actions.payload,
                        loading: false
                        
                    }
        case LOADING:
                        return {
                            ...state,
                            loading: true
                            
                        }
        default:
            return state
    }
}